module.exports = (client, url) => {


  const all = new Promise((resolve, reject) => {
    client.connect(url, (err, db) => {
      if (err) reject(err)
      db.collection('bands').find({}).toArray((err, bands) => {
        if (err) reject(err)
        resolve(bands)
      })
    })
  })

  const bands = {
    all: all
  }
  return bands
}
