const express = require('express')
const router = express.Router()
const Twitter = require('../utils/twitter')
const User = require('../queries/user')

router.get('/:username', async (req, res, next) => {
  const { username = '' } = req.params
  const { limit = 10 } = req.query

  try {
    const twitter = new Twitter()
    const users = await User.searchUsers(username, limit)

    let page = 0
    while (users.length < limit) {
      const twitterUsers = await twitter.searchUsers(username, {
        count: limit - users.length,
        page: page++,
      })

      if (!twitterUsers || twitterUsers.length === 0) break

      const userLookup = new Set(users.map((u) => u.username))
      const uniqueUsers = twitterUsers.filter(
        (u) => !userLookup.has(u.username)
      )

      // no more unique users
      if (uniqueUsers.length === 0) break

      const filtered = await User.filterOptout(uniqueUsers)

      const userWithVoteInfo = await User.addVoteInfo(filtered)
      users.push(...userWithVoteInfo)
    }

    res.send({ users })
  } catch (e) {
    next(e)
  }
})

module.exports = router
