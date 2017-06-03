/*
      Create bands migration
*/
module.exports = function(validator, db) {
  var promise = new Promise(function(resolve, reject) {
    db.createCollection(
      'bands',
      {
        validator: validator
      },
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve('Bands migrated successfully!')
        }
      }
    )
  })
  return promise
}
