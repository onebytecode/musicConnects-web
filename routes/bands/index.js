module.exports = (request, response, app, db) => {
  require('./bands_routes.js')(request, response, app)
}
