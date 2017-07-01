module.exports = (request, response, app, db) => {
  return require('./main_routes.js')(request, response, app, db)
}
