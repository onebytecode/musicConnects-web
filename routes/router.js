const MAIN_ROUTES    =  { equal: '/\/(\w+\.)*/', path: './main' }
const ARTIST_ROUTES  =  { equal: '', path: './artist' }
const GET            =  'GET'
const POST           =  'POST'
const DELETE         =  'DELETE'
const PUT            =  'PUT'


module.exports = (app) => {

  const modelsProviders = {
    band: getBands
  }
  const { allowed_models } = app.config
  app.get('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    const nameOfSection      = firstSectionOfPath.replace(/\//, '')
    const model_meta  =  allowed_models.filter((model) => { return model.routes.get === firstSectionOfPath })
    if (model_meta.length === 1) return modelsProviders[model_meta[0].name](app, req, res, GET)
    switch(firstSectionOfPath) {
      case '/': return getMain(req, res, app,) // GET /
      case '/public': return getResources(req, res, app) // GET /public/*

      default: return res.sendStatus(500)

    }
  })
  app.post('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    const model_meta  =  allowed_models.filter((model) => { return model.routes.create === firstSectionOfPath })
    if (model_meta.length === 1) return modelsProviders[model_meta[0].name](app, req, res, POST)
    return res.sendStatus(400)
  })
  app.delete('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    const model_meta  =  allowed_models.filter((model) => { return model.routes.delete === firstSectionOfPath })
    if (model_meta.length === 1) return modelsProviders[model_meta[0].name](app, req, res, DELETE)
    return res.sendStatus(400)
  })
  app.put('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    const model_meta  =  allowed_models.filter((model) => { return model.routes.update === firstSectionOfPath })
    if (model_meta.length === 1) return modelsProviders[model_meta[0].name](app, req, res, PUT)
    return res.sendStatus(400)
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
//  /bands
const getBands = (app, req, res, method) => {
  require('./bands')(app, req, res, method)
}
// /artists
const getArtists = (app, req, res, method) => {
  require('./artists')(app, req, res, method)
}
