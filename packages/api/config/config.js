require('./load-config')()
console.log('database', process.env.DATABASE_URL)
module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
    migrationStorageTableSchema: 'public',
  },
}
