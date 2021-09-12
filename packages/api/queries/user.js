'use strict'

const Twitter = require('../utils/twitter')
const { QueryTypes, DataTypes, Op } = require('sequelize')
const db = require('../db')

require('../models/user')(db, DataTypes)
const { User } = db.models
const Ballot = require('./ballot')

const rankSubquery = `
SELECT
  username,
  score,
  "creditsUsed",
  "createdAt",
  DENSE_RANK () OVER (ORDER BY score DESC, "createdAt" ASC) as rank
FROM "Users"
WHERE optout = false AND score IS NOT NULL`

const topUserQuery = ({ limit = 10, offset = 0 }) => {
  return `
    WITH cte AS (${rankSubquery})
    SELECT * FROM cte
    ORDER BY score DESC, "createdAt" ASC
    LIMIT ${limit} OFFSET ${offset}
`
}

const userQuery = `
    WITH cte AS (${rankSubquery})
    SELECT u.username, u.optout, u.score, u."creditsUsed", rank
    FROM "Users" u
    LEFT OUTER JOIN cte ON u.username = cte.username
    where u.username = $username
`

const searchQuery = ({ limit = 10, offset = 0 }) => `
    WITH cte AS (${rankSubquery})
    SELECT u.username, u.optout, u.score, u."creditsUsed", rank
    FROM "Users" u
    LEFT OUTER JOIN cte ON u.username = cte.username
    WHERE u.username ILIKE $username
      AND u.optout = false
    LIMIT ${limit} OFFSET ${offset}
`

const updateUserScore = async (username, transaction) => {
  const score = await Ballot.sumScore(username, transaction)
  await User.update(
    { score },
    {
      where: { username },
      transaction,
    }
  )
  return score
}

const updateCreditsUsed = async (username, transaction) => {
  const creditsUsed = await Ballot.sumCreditsUsed(username, transaction)
  await User.update(
    { creditsUsed },
    {
      where: { username },
      transaction,
    }
  )
  return creditsUsed
}

const adjustCandidateScore = async ({ voter, transaction }) => {
  const candidates = await Ballot.getCandidates(voter, transaction)
  for (let candidate of candidates) {
    await updateUserScore(candidate, transaction)
  }
}

module.exports = {
  isOptout: async (username = '') => {
    const result = await User.findOne({
      attributes: ['optout'],
      where: {
        optout: true,
        username,
      },
      raw: true,
    })

    return Boolean(result)
  },
  getUser: async (username = '') => {
    const users = await db.query(userQuery, {
      bind: { username },
      type: QueryTypes.SELECT,
    })

    if (users.length === 0) {
      users.push({ username })
    } else if (users[0].optout) {
      return null
    }

    const twitter = new Twitter()
    const profiles = await twitter.getUserProfiles(users)
    return profiles[0]
  },
  getTopUsers: async ({ offset = 0, limit = 10 } = {}) => {
    const users = await db.query(topUserQuery({ offset, limit }), {
      type: QueryTypes.SELECT,
    })

    const twitter = new Twitter()
    return twitter.getUserProfiles(users)
  },
  count: async () => {
    const data = await User.count({
      where: {
        optout: false,
        score: {
          [Op.ne]: null,
        },
      },
      raw: true,
    })

    return data
  },
  searchUsers: async (userSearch, limit = 10) => {
    const users = await db.query(searchQuery({ limit }), {
      type: QueryTypes.SELECT,
      bind: { username: `%${userSearch}%` },
    })

    const twitter = new Twitter()
    return twitter.getUserProfiles(users)
  },
  filterOptout: async (users) => {
    if (!users || users.length === 0) return []

    const usernames = users.map((u) => u.username)
    const result = await User.findAll({
      attributes: ['username'],
      where: {
        optout: true,
        username: usernames,
      },
      raw: true,
    })

    if (result.length === 0) {
      return users
    }

    const optoutUsers = new Set(result)
    return users.filter((u) => !optoutUsers.has(u.username))
  },
  addVoteInfo: async (users) => {
    if (!users || users.length === 0) return []

    const result = await Promise.all(
      users.map((user) =>
        db
          .query(userQuery, {
            bind: { username: user.username },
            type: QueryTypes.SELECT,
          })
          .then(([dbUser]) => {
            return dbUser ? { ...user, ...dbUser } : user
          })
      )
    )

    return result
  },
  castVote: async ({ voter, candidate, score }) => {
    const transaction = await db.queryInterface.sequelize.transaction()
    try {
      await User.findOrCreate({
        where: { username: candidate },
        transaction,
      })
      await User.findOrCreate({
        where: { username: voter },
        transaction,
      })
      await Ballot.save({ voter, candidate, score, transaction })
      const newScore = await updateUserScore(candidate, transaction)
      await updateCreditsUsed(voter, transaction)
      await transaction.commit()
      return newScore
    } catch (err) {
      console.log('castVote error', err)
      await transaction.rollback()
      throw err
    }
  },
  setOptout: async (username) => {
    if (!username) return

    const transaction = await db.queryInterface.sequelize.transaction()
    const now = new Date()
    const voter = username

    try {
      const res = await User.update(
        { optout: true, updatedAt: now },
        {
          where: {
            username,
          },
          transaction,
        }
      )

      await adjustCandidateScore({ voter, transaction })

      await Ballot.delete({
        where: {
          [Op.or]: {
            voter,
            candidate: username,
          },
        },
        transaction,
      })

      await transaction.commit()
    } catch (err) {
      console.log('err', err)
      await transaction.rollback()
      throw err
    }
  },
}
