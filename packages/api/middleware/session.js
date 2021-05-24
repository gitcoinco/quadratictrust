'use strict'
const crypto = require('../utils/crypto')
const createError = require('http-errors')
const User = require('../queries/user')

module.exports = {
  requireLogin( req, res, next ) {
    if( !req.auth ) {
      throw new createError(401, 'Require login')
    }
    next();    
  },
  async verify( req, res, next ) {
    if (req.session && req.session.auth) {
      const { counter, data } = req.session.auth
      const token = crypto.decrypt(counter, data)

      const isOptout = await User.isOptout(token.username)
      if( isOptout ) {
        throw new createError(404, 'User opted out of this site')
      }
      req.auth = token
    }
    next();
  }
}
  