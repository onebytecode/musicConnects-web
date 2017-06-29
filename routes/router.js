const MAIN_ROUTES  =  { equal: '/\/(\w+\.)*/', path: './main' }
const ARTIST_ROUTES  =  { equal: '', path: './artist' }

const analyseRoute  =  (request, response, app, db) => {
  const route = request.path
  console.log(route);
  console.log(/\/(\w+\.*)*/g.test(route))
  if (/\/(\w+\.)*/.test(route)) { // Catches all like / | /main.js etc.
    return require(MAIN_ROUTES.path)(request, response, app, db)
  }
  return response.sendStatus(500)
}
module.exports = (app, db) => {
  app.get('/*', (req, res) => {
    analyseRoute(req, res , app, db)
  })
}
