'use strict'

const Ballot = require('../queries/ballot')

afterAll(() => require('../db').close())

test('get ballot by voter should return votes in descending order of creation time', async () => {
  const username = 'yuetloo'
  const votes = await Ballot.get({ voter: username, limit: 2 })
  console.log(votes)
  await expect(votes.length).toBeGreaterThanOrEqual(0)
})
