'use strict'

const crypto = require('../utils/crypto');

test('encrypt and descrypt session data should work', async () => {
  const tokenKey = 'abc'
  const tokenSecret = 'edf'

  const { counter, data } = crypto.encrypt(tokenKey, tokenSecret)
  const token = crypto.decrypt(counter, data)

  expect(token.tokenKey).toEqual(tokenKey)
  expect(token.tokenSecret).toEqual(tokenSecret)
  
});