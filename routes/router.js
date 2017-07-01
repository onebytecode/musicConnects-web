const MAIN_ROUTES    =  { equal: '/\/(\w+\.)*/', path: './main' }
const ARTIST_ROUTES  =  { equal: '', path: './artist' }
const GET            =  'GET'
const POST           =  'POST'


module.exports = (app) => {
  app.get('/*', (req, res) => {
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    switch(firstSectionOfPath) {
      case '/': return getMain(req, res, app,) // GET /
      case '/public': return getResources(req, res, app) // GET /public/*
      case '/bands': return getBands(req, res, app, GET) // GET /bands

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
const getBands = (req, res, app, method) => {
  require('./bands')(req, res, app, method)
}
