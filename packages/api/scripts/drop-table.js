const db = require('../db')

async function main() {
  const queryInterface = db.getQueryInterface()
  await queryInterface.dropTable('Ballots');
  await queryInterface.dropTable('Users');
  await queryInterface.dropTable('ballots');
  await queryInterface.dropTable('users');
  await queryInterface.dropTable('SequelizeMeta');
}

main().then(() => {
  console.log('done dropping tables')
}).catch(e => {
  console.log('error dropping tables', e)
}).finally(() => {
  db.close()
})
