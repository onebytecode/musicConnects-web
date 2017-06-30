module.exports = (client, url) => {
  this.all = new Promise((resolve, reject) => {
    client.connect(url, (err, db) => {
      if (err) reject(err)
      db.collection('bands').find({}).toArray((err, bands) => {
        if (err) reject(err)
        resolve(`Getting bands ${bands}`)
        db.close()
      })
    })
  })
}
