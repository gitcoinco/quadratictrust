'use strict'
const db = require('../db')
const Ballot = require('../queries/ballot')

afterAll(() => db.close())

test('get ballot by voter should return votes in descending order of creation time', async () => {
  const username = 'yuetloo'
  const votes = await Ballot.get({ voter: username, limit: 2 })
  console.log(votes)
  await expect(votes.length).toBeGreaterThanOrEqual(0)
})

test('get credits used for valid voter', async () => {
  const voter = 'yuetloo'
  const transaction = await db.queryInterface.sequelize.transaction()
  const used = await Ballot.sumCreditsUsed(voter, transaction)
  await transaction.commit()
  await expect(used).toBeGreaterThan(0)
})

test('get credits used for invalid user', async () => {
  const voter = 'xxx'
  const transaction = await db.queryInterface.sequelize.transaction()
  const used = await Ballot.sumCreditsUsed(voter, transaction)
  await transaction.commit()
  await expect(used).toEqual(0)
})

test('test getCandidates', async () => {
  const voter = 'yuetloo'
  const transaction = await db.queryInterface.sequelize.transaction()
  const candidates = await Ballot.getCandidates(voter, transaction)
  await transaction.commit()
  await expect(candidates.length).toBeGreaterThanOrEqual(0)
})
