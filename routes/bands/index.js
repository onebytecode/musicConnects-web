module.exports = (request, response, app, method) => {
  const { bands_controller } = app.controllers
  require('./bands_routes')(request, response, bands_controller, method)
}
