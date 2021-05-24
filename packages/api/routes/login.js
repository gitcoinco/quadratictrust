const express = require('express');
const router = express.Router();
const Twitter = require('../utils/twitter')
const crypto = require('../utils/crypto')
const User = require('../queries/user')

/* login */
router.get('/', async (req, res, next) => {

  try {
    const twitter = new Twitter()
    const {oauth_token} = await twitter.getRequestToken()
    res.redirect(`https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`)
  }
  catch(err) {
    console.log('errr', err)  
    next(err)
  }
});

router.get('/callback', async (req, res, next) => {
  const { 
    oauth_verifier: oauthVerifier,
    oauth_token: oauthToken 
  } = req.query;

  try {
    if( !oauthVerifier || !oauthToken ) throw new Error('Missing oauth token')

    const twitter = new Twitter()
    const token = await twitter.getAccessToken({
      oauthVerifier,
      oauthToken
    })

    const username = token.screen_name;

    const auth = crypto.encrypt({
      username,
      tokenKey: token.oauth_token,
      tokenSecret: token.oauth_token_secret
    })

    const isOptout = await User.isOptout(username)
    if( isOptout ){
      throw new Error('Not authorized')
    }

    req.session.auth = auth;
    res.json({ username })

  } catch (err) {
    console.log('callback error', err)  
    next({status: 401, message: err.message})
  }
})

module.exports = router;
