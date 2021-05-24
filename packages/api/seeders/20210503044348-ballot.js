'use strict';

const tableName = 'Ballots'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(tableName, [
      { voter: 'ricmoo', candidate: 'yuetloo', score: 4 }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};
