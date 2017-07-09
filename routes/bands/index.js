module.exports = (app, req, res, method) => {
  const { bands_controller } = app.controllers
  require('./bands_routes')(bands_controller, req, res, method)
}
