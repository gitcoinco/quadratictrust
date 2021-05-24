'use strict';

const tableName = 'Ballots'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE IF NOT EXISTS "${tableName}" (
      id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      voter           VARCHAR NOT NULL,
      candidate       VARCHAR NOT NULL,
      score           INT NOT NULL DEFAULT 0,
      credits         INT NOT NULL DEFAULT 0,
      "createdAt"     DATE NOT NULL DEFAULT CURRENT_DATE,
      "updatedAt"     DATE NOT NULL DEFAULT CURRENT_DATE,
      "deletedAt"     DATE,
      CONSTRAINT fk_ballot_candidate
      FOREIGN KEY(candidate) 
	    REFERENCES "Users"(username)
    )
  `);

    await queryInterface.addIndex(tableName, ['voter'], { name: 'ballot_voter_ix'})
    await queryInterface.addIndex(tableName, ['candidate'], {name: 'ballot_candidate_ix'})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(tableName, 'ballot_voter_ix')
    await queryInterface.removeIndex(tableName, 'ballot_candidate_ix')    
    await queryInterface.dropTable(tableName);
  }
};