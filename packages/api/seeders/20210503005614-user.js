'use strict';

const tableName = 'Users'
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(tableName, [
        { username: 'gitcoin' },
        { username: 'owocki' },
        { username: 'Anne_Connelly' },
        { username: 'VitalikButerin' },
        { username: 'elonmusk' },
        { username: 'jack' },
        { username: 'SprinklesNFT' },
        { username: 'hi_firefly' },
        { username: 'ricmoo' },
        { username: 'yuetloo' },
        { username: 'Loo27464703' },
      ])
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete(tableName, null, {});
  }
};
