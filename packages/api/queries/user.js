'use strict'

const Twitter = require('../utils/twitter')
const { QueryTypes, DataTypes, Op } = require('sequelize')
const db = require('../db')

require('../models/user')(db, DataTypes)
const { User } = db.models
const Ballot = require('./ballot')


const userQuery = ({limit = 10, offset = 0, userSearch, username}) => {
  const AndLikeUsername = userSearch? "AND u.username ILIKE '%" + userSearch + "%'" : ''
  const AndEqualUsername = username? "AND u.username = :username" : ''
  return `
    SELECT u.username,
          u.score,
          (SELECT COUNT(1) + 1 FROM "Users" uu
            WHERE uu.score > u.score and uu.optout = false) as rank,
          (SELECT SUM(b.score * b.score) FROM "Ballots" b
            WHERE b.voter = u.username) as "creditsUsed"
      FROM "Users" u
    WHERE u.optout = false ${AndLikeUsername} ${AndEqualUsername}
    ORDER BY score DESC
    LIMIT ${limit}
    OFFSET ${offset}
`
}

const updateUserScore = async (username, transaction ) => {
  const score = await Ballot.sumScore(username, transaction)
  await User.update({ score }, {
    where: { username },
    transaction
  })
  return score
}

const adjustCandidateScore = async ({ voter, transaction}) => {
  const candidates = await Ballot.getCandidates(voter, transaction)
  for (let candidate of candidates) {
    await updateUserScore(candidate, transaction)
  }
}

module.exports = {
  isOptout: async (username = '') => {
    const result = await User.findOne({
      attributes: [ "optout" ],
      where: {
        optout: true,
        username
      },
      raw: true
    })

    return Boolean(result)
  },
  getUser: async (username = '') => {
    const users = await db.query(userQuery({username}),
    {
      replacements: { username },
      type: QueryTypes.SELECT
    })

    if( users.length === 0 ) {
      users.push({ username })
    }

    const twitter = new Twitter()
    const profiles = await twitter.getUserProfiles(users)
    return profiles[0]
  },
  getTopUsers: async ({offset = 0, limit = 10} = {}) => {
    const users = await db.query(userQuery({offset, limit}),
    {
      type: QueryTypes.SELECT
    })

    const twitter = new Twitter()
    return twitter.getUserProfiles(users)
  },
  count: async () => {
    const data = await User.count({
      where: {
        optout: false
      },
      raw: true
    })

    return data
  },
  searchUsers: async (userSearch, limit = 10) => {
    const users = await db.query(userQuery({limit, userSearch}),
    {
      type: QueryTypes.SELECT
    })

    const twitter = new Twitter()
    return twitter.getUserProfiles(users)
  },
  filterOptout: async (users) => {
    if(!users || users.length === 0 )
      return []

    const usernames = users.map(u => u.username)
    const result = await User.findAll({
      attributes: [ "username" ],
      where: {
        optout: true,
        username: usernames
      },
      raw: true
    })

    if( result.length === 0 ) {
      return users
    }

    const optoutUsers = new Set(result)
    return users.filter(u => !optoutUsers.has(u.username))
  },
  castVote: async ({voter, candidate, score}) => {
    const transaction = await db.queryInterface.sequelize.transaction();
    try {
      await User.findOrCreate({
        where: { username: candidate },
        transaction
      })
      await Ballot.save({ voter, candidate, score, transaction })
      const newScore = await updateUserScore(candidate, transaction)
      await transaction.commit();
      return newScore
    } catch (err) {
      console.log('castVote error', err)
      await transaction.rollback();
      throw err
    }
  },
  setOptout: async (username) => {
    if(!username) return

    const transaction = await db.queryInterface.sequelize.transaction();
    const now = new Date()
    const voter = username

    try {
      const res = await User.update({ optout: true, updatedAt: now }, {
        where: {
          username
        },
        transaction
      })

      await adjustCandidateScore({voter, transaction})

      await Ballot.delete({
        where: {
          [Op.or]: {
            voter,
            candidate: username
          }
        },
        transaction
      })

      await transaction.commit();
    } catch (err) {
      console.log('err', err)
      await transaction.rollback();
      throw err
    }
  }
}