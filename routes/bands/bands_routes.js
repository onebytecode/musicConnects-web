module.exports = (bands_controller, req, res, method) => {
  const GET     =  'GET'
  const POST    =  'POST'
  const DELETE  =  'DELETE'
  const PUT     =  'PUT'
  switch(method) {
    case GET: return getBandById(req, res, bands_controller)
    case POST: return postBand(req, res, bands_controller)
    case DELETE: return deleteBand(req, res, bands_controller)
    case PUT: return updateBand(req, res, bands_controller)
  }

}
// GET
const getBandById = (req, res, controller) => {
  let ID  =  req.path.match(/\/\w+/g)[1]
  console.log(`!!! ID ${ID}`);
  if (!ID) return res.sendStatus(400)
  ID = ID.replace(/\//, '')
  if (!parseInt(ID)) {
    return res.sendStatus(400)
  }
  controller.get({ id: ID }, (err, band) => {
    console.log(err, band);
    if (err) return res.sendStatus(500)
    return res.sendStatus(200)
  })
}
// POST
const postBand = (req, res, controller) => {
  const reqPathParsed  =  req.path.match(/\/\w+/g)
  if (reqPathParsed[1]) return res.sendStatus(400)
  if (!req.body.band) return res.sendStatus(400)
  const newBand  =  req.body.band
  controller.create(newBand, (err, band) => {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200)
  })
}
// UPDATE
const updateBand  =  (req, res, controller) => {
  let ID  =  req.path.match(/\/\w+/g)[1]
  if (!ID) return res.sendStatus(400)
  ID = ID.replace(/\//, '')
  const updateParams  =  req.body.band
  if (!parseInt(ID)) {
    return res.sendStatus(400)
  }
  controller.update(updateParams,  (err, doc) => {
    console.log(err, doc);
    if (err) return res.sendStatus(500)
    return res.sendStatus(200)
  })
}

const deleteBand = (req, res, controller) => {
  let ID  =  req.path.match(/\/\w+/g)[1]
  if (!ID) return res.sendStatus(400)
  ID = ID.replace(/\//, '')
  if (!parseInt(ID)) {
    return res.sendStatus(400)
  }
  controller.delete({ id: ID }, (err, doc) => {
    console.log(err, doc);
    if (err) return res.sendStatus(500)
    return res.sendStatus(200)
  })
}
