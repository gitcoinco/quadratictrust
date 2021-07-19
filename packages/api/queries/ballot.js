'use strict'
const Twitter = require('../utils/twitter')
const { DataTypes, QueryTypes, fn, col } = require('sequelize')
const db = require('../db')

require('../models/ballot')(db, DataTypes)
const { Ballot } = db.models

const attributes = ['voter', 'candidate', 'score', 'createdAt']

const buildFilter = async ({ voter, candidate }) => {
  const filter = {}
  if (voter) filter.voter = voter
  if (candidate) filter.candidate = candidate
  return filter
}

module.exports = {
  count: async (args) => {
    const filter = await buildFilter(args)

    const count = await Ballot.count({
      where: filter,
    })

    return count
  },
  get: async ({ voter, candidate, limit, offset = 0 } = {}) => {
    const filter = await buildFilter({ voter, candidate })

    const result = await Ballot.findAll({
      attributes,
      where: filter,
      order: [['createdAt', 'DESC']],
      offset,
      limit,
    })

    const twitter = new Twitter()
    const ballots = result.map((v) => v.dataValues)
    const voters = ballots.map((b) => ({ username: b.voter }))
    const voterUrls = await twitter.userWithProfileUrl(voters)
    const candidates = ballots.map((b) => ({ username: b.candidate }))
    const candidateUrls = await twitter.userWithProfileUrl(candidates)

    return ballots.map((ballot, i) => {
      const { profileUrl: voterUrl } = voterUrls[i]
      const { profileUrl: candidateUrl } = candidateUrls[i]
      return { ...ballot, voterUrl, candidateUrl }
    })
  },
  delete: (options) => {
    return Ballot.destroy(options)
  },
  save: ({ voter, candidate, score, transaction }) => {
    return Ballot.create({ voter, candidate, score }, { transaction })
  },
  getCandidates: async (voter, transaction) => {
    const ballots = await Ballot.findAll({
      attributes: [[fn('DISTINCT', col('candidate')), 'candidate']],
      where: { voter },
      transaction,
      raw: true,
    })

    return ballots ? ballots.map((b) => b.candidate) : []
  },
  sumScore: async (candidate, transaction) => {
    const score = await Ballot.sum('score', {
      where: { candidate },
      transaction,
    })
    return score
  },
}
