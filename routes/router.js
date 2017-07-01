const MAIN_ROUTES  =  { equal: '/\/(\w+\.)*/', path: './main' }
const ARTIST_ROUTES  =  { equal: '', path: './artist' }


module.exports = (app, db) => {
  app.get('/*', (req, res) => {
    console.log(`Starting ${req.path}`);
    const firstSectionOfPath = req.path.match(/\/\w*/)[0]
    switch(firstSectionOfPath) {
      case '/': return getMain(req, res, app, db) // GET /
      case '/public': return getResources(req, res, app, db) // GET /public/*
      case '/bands': return getBands(req, res, app) // GET /bands

      default: return res.sendStatus(500)

    }
  })
}


/*
    GET /
*/
const getMain = (req, res, app, db) => {
  require('./main')(req, res, app, db)
}
/*
    GET /public/
*/
const getResources = (req, res, app, db) => {
  require('./resources')(req, res, app, db)
}

// GET /bands
const getBands = (req, res, app) => {
  require('./bands')(req, res, app)
}
