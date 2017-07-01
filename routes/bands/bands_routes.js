module.exports = (req, res, app, method) => {
  const GET   =  'GET'
  const POST  =  'POST'
  switch(method) {
    case GET: return getBandById(req, res, app)
    case POST: return postBand(req, res, app)
  }

}

const getBandById = (req, res, app) => {
  let ID  =  req.path.match(/\/\w+/g)[1]
  if (!ID) return res.sendStatus(400)
  ID = ID.replace(/\//, '')
  if (!parseInt(ID)) {
    return res.sendStatus(400)
  }
  const { Bands }  =  app.models
  Bands.find({ id: ID }, (err, band) => {
    if (err) {
      return res.sendStatus(500)
    } else {
      res.sendStatus(200)
      console.log(band);
    }

  })
}

const postBand = (req, res, app) => {
  const reqPathParsed  =  req.path.match(/\/\w+/g)
  if (reqPathParsed[1]) return res.sendStatus(400)
  if (!req.body.band) return res.sendStatus(400)
  const newBand  =  req.body.band
  const { Bands }  =  app.models
  Bands(newBand).save((err, band) => {
    if (err) res.sendStatus(500)
    console.log(band);
    res.sendStatus(200)
  })

}
