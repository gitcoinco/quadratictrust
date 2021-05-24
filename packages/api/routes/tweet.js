'use strict'

const express = require('express');
const router = express.Router();
const Twitter = require('../utils/twitter')
const { requireLogin } = require('../middleware/session')

// tweet
router.post('/', requireLogin, async (req, res, next) => {
  const {
    tokenKey: accessTokenKey,
    tokenSecret: accessTokenSecret
  } = req.auth

  const status = req.body.message

  try {
    const twitter = new Twitter({ accessTokenKey, accessTokenSecret })
    await twitter.postTweet(status)
    res.send({ success: true })
  } catch (e) {
    console.log('tweet error', e)
    next(e)
  }
})

module.exports = router;
