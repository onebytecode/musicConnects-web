const MAIN_ROUTES    =  { equal: '/\/(\w+\.)*/', path: './main' }
const ARTIST_ROUTES  =  { equal: '', path: './artist' }
const GET            =  'GET'
const POST           =  'POST'
const DELETE         =  'DELETE'
const PUT            =  'PUT'


module.exports = (app) => {
  //  /bands
  const getBands = (req, res, app, method) => {
    require('./bands')(req, res, app, method)
  }
  const modelsProviders = {
    band: getBands
  }
  const { allowed_models } = app.config
  app.get('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    const nameOfSection      = firstSectionOfPath.replace(/\//, '')
    const model_meta  =  allowed_models.filter((model) => { return model.routes.get === firstSectionOfPath })
    if (model_meta.length === 1) return modelsProviders[model_meta[0].name](app, req, res, GET)
    console.log(`Not returned`);
    switch(firstSectionOfPath) {
      case '/': return getMain(req, res, app,) // GET /
      case '/public': return getResources(req, res, app) // GET /public/*

      default: return res.sendStatus(500)

    }
  })
  app.post('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    switch(firstSectionOfPath) {
      case '/bands': return getBands(req, res, app, POST)

      default: return res.sendStatus(500)

    }
  })
  app.delete('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    switch(firstSectionOfPath) {
      case '/bands': return getBands(req, res, app, DELETE)

      default: return res.sendStatus(400)
    }
  })
  app.put('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    switch(firstSectionOfPath) {
      case '/bands': return getBands(req, res, app, PUT)

      default: return res.sendStatus(400)
    }
  })
}


/*
    GET /
*/
const getMain = (req, res, app) => {
  require('./main')(req, res, app)
}
/*
    GET /public/
*/
const getResources = (req, res, app) => {
  require('./resources')(req, res, app)
}
