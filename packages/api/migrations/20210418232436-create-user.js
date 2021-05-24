'use strict';

const tableName = 'Users'
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.sequelize.query(`CREATE TABLE IF NOT EXISTS "${tableName}" (
    username       VARCHAR PRIMARY KEY  NOT NULL,
    score          INTEGER NOT NULL DEFAULT 0,
    optout         BOOL NOT NULL DEFAULT FALSE,
    "createdAt"    DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedAt"    DATE NOT NULL DEFAULT CURRENT_DATE
  )`);

    await queryInterface.addIndex(tableName, ['optout'], { name: 'user_optout_ix'})
    await queryInterface.addIndex(tableName, ['username'], { name: 'user_username_ix'})
    await queryInterface.addIndex(tableName, ['score'], { name: 'user_score_ix'})
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeIndex(tableName, 'user_optout_ix')
    await queryInterface.removeIndex(tableName, 'user_username_ix')
    await queryInterface.removeIndex(tableName, 'user_score_id')
    await queryInterface.dropTable(tableName);
  }
};