const MongoClient      = require('mongodb').MongoClient
const db               = require('../db')
var  Promise           = require('bluebird')


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(`ERROR :: ${err}`)
  /*
        Migrations
  */
  Promise.all(
    require('./create_migrations')(database)
  )
  .then( function(result) {
    console.log(`${result.join('\n')}`);
    database.listCollections().toArray(function(err, collInfos) {
      if (err) return err
      collInfos.forEach((el) => {
        console.log(`Name : ${el.name}`);
      })
    })
    database.close()
  }, function(error) {
    console.log(`Error ${error}`);
    database.close()
  })

})
