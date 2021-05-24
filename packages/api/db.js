'use strict'

require('./config/load-config')()

const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
})
