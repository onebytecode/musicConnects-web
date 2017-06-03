/*
    Automated generating migrations
*/
const validators    = require('../db_validators.json')

module.exports = function(db) {
  var migrationsArray = []
  Object.keys(validators).forEach((migration_name) => {
    var name = migration_name + 's'
    var promise = new Promise(function(resolve, reject) {
      db.createCollection(
        name,
        {
          validator: validators[migration_name]
        },
        (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(`${name} migrated successfully!`)
          }
        }
      )
    })
    migrationsArray.push(promise)
  })
  return migrationsArray

}
