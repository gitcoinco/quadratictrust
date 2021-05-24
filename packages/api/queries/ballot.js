'use strict'
const { DataTypes, QueryTypes, fn, col} = require('sequelize')
const db = require('../db')

require('../models/ballot')(db, DataTypes)
const { Ballot } = db.models

const attributes = ["voter", "candidate", "score"]

const buildFilter = async ({ voter, candidate }) => {
  const filter = { }
  if( voter ) filter.voter = voter
  if( candidate ) filter.candidate = candidate
  return filter
}

module.exports = {
  count: async (args) => {  
    const filter = await buildFilter(args)

    const count = await Ballot.count({
      where: filter
    })

    return count
  },
  get: async ({voter, candidate, limit, offset = 0} = {}) => {
    const filter = await buildFilter({voter, candidate})

    const result = await Ballot.findAll({
      attributes,
      where: filter,  
      offset,
      limit
    })

    return result
  },
  delete: (options) => {
    return Ballot.destroy(options)
  },
  save: ({voter, candidate, score, transaction}) => {
    return Ballot.create({voter, candidate, score}, { transaction })
  },
  getCandidates: async (voter, transaction) => {
    const ballots = await Ballot.findAll({
      attributes: [[fn('DISTINCT', col('candidate')), 'candidate']],
      where: { voter },
      transaction,
      raw: true
    })

    return ballots? ballots.map(b => b.candidate) : []
  },
  sumScore: async (candidate, transaction) => {
    const score = await Ballot.sum('score', {
      where: { candidate },
      transaction
    })
    return score
  }
}