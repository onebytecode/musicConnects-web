module.exports = (request, response, app, method) => {
  require('./bands_routes.js')(request, response, app, method)
}
