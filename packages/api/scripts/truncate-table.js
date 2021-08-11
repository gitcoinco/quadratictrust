const db = require('../db')

async function main() {
  const queryInterface = db.getQueryInterface()
  await queryInterface.bulkDelete('Ballots', null, { truncate: true });
  await queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true });
}

main().then(() => {
  console.log('done truncating tables')
}).catch(e => {
  console.log('error truncating tables', e)
}).finally(() => {
  db.close()
})
