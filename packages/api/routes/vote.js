const express = require('express')
const { requireLogin } = require('../middleware/session')
const router = express.Router()
const User = require('../queries/user')

async function validate(req, res, next) {
  const { candidate, score } = req.body
  if (!candidate) {
    throw new createError(400, 'Missing candidate')
  }
  if (!score) {
    throw new createError(400, 'Missing score')
  }

  const profile = await getUserProfile(candidate)
  if (!profile) {
    throw new createError(400, 'Candidate is invalid twitter user')
  }
  next()
}

/*
 * POST /ballots
 *
 */
router.post('/', requireLogin, validate, async (req, res, next) => {
  const { username: voter } = req.auth
  const { candidate, score } = req.body

  try {
    const requiredCredits = score * score
    const user = await User.getUser(voter)
    const availableCredits = user.credits || 0
    if (availableCredits < requiredCredits) {
      throw new Error('Not enough credits')
    }
    const newScore = await User.castVote({ voter, candidate, score })
    const data = { newScore }
    res.send({ data })
  } catch (e) {
    next(e)
  }
})

module.exports = router
