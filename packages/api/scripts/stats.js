const db = require('../db')
const { QueryTypes } = require('sequelize')

const queryInterface = db.getQueryInterface()

const queries = [
      `SELECT count(distinct voter) fROM "Ballots"
      WHERE "deletedAt" is null`,
      `SELECT count(distinct candidate) fROM "Ballots"
      WHERE "deletedAt" is null`,
      `SELECT optout, count(1) fROM "Users"
      GROUP BY optout`,
]

async function main() {
   const option = { type: QueryTypes.SELECT }

   for (let i = 0; i < queries.length; i++) {
     const query = queries[i]
     const result = await queryInterface.sequelize.query(query, option)
     console.log(result);
   }
}


main()
.then(() => console.log('done'))
.catch(console.error)
.finally(() => {
  db.close()
})
