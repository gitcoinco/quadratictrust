const express = require('express')
const router = express.Router()
const User = require('../queries/user')

/* identity */
router.get('/', async (req, res, next) => {
  try {
    let user = { username: null }
    if (req.auth) {
      user = await User.getUser(req.auth.username)
    }
    res.json(user)
  } catch (err) {
    console.log('errr', err)
    next(err)
  }
})

module.exports = router
