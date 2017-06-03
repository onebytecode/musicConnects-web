/*
      Create artists migration
*/
module.exports = function(validator, db) {
  var promise = new Promise(function(resolve, reject) {
    db.createCollection(
      'artists',
      {
        validator: validator
      },
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve('Artists migrated successfully!')
        }
      }
    )
  })
  return promise
}
