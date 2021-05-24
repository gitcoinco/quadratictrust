'use strict'

const tableName = 'Ballots'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "${tableName}"
        ADD CONSTRAINT unique_ballot UNIQUE (voter, candidate)
      `)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "${tableName}" (
        DROP CONSTRAINT unique_ballot
      `)
  },
}
