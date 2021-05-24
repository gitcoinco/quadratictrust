const db = require('../db')

async function main() {
  const queryInterface = db.getQueryInterface()
  /*
  await queryInterface.bulkInsert('Ballots', [{
     candidate: 'yuetloo',
     voter: 'ricmoo',
     score: 4
   }], {})
   */
   await queryInterface.sequelize.query(`Update "Users" set score = 4 where username = 'yuetloo'`)

}

main().then(() => {
  console.log('done ballot data')
}).catch(e => {
  console.log('error feeding ballot data', e)
}).finally(() => {
  db.close()
})
