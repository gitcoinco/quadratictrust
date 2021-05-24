const express = require('express')
const router = express.Router()
const Ballot = require('../queries/ballot')

/*
 * GET /ballots
 *   Retrive ballots
 * Query:
 *   voter: votes given by this user
 *   candidate: votes received by this user
 *   offset: rows starting offset
 *   limit: max number of rows to return
 */
router.get('/', async (req, res, next) => {
  const { voter, candidate, limit, offset = 0 } = req.query

  try {
    const filter = { candidate, voter }
    const ballots = await Ballot.get({ ...filter, limit, offset })
    const data = { ballots }
    if (offset === 0) {
      data.total = await Ballot.count(filter)
    }
    res.json({ data })
  } catch (e) {
    next(e)
  }
})

module.exports = router
