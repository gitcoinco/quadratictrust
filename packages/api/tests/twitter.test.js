'use strict'

const Twitter = require('../utils/twitter')

require('../config/load-config')()
const accessTokenKey = 'blah'
const accessTokenSecret = 'blah'

test.skip('make a tweet should work', async () => {
  const client = new Twitter({ accessTokenKey, accessTokenSecret })
  const status = 'miracle world'
  const tweetId = await client.postTweet(status)
  expect(tweetId).toBeDefined()
})

test.skip('verify twitter account should work', async () => {
  const client = new Twitter({ accessTokenKey, accessTokenSecret })
  const user = await client.verifyCredentials()
  expect(user).toBeDefined()
})

test('search user should work', async () => {
  const client = new Twitter()
  const options = {
    count: 10,
  }
  for (let i = 0; i < 3; i++) {
    options.page = i
    const users = await client.searchUsers('a', options)
    expect(users).toBeDefined()
  }
})
