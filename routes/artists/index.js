model.exports  =  (app, req, res, method) => {
  const { artists_controller } = app.controllers
  require('./artists_routes')(artists_controller, req, res, method)
}
