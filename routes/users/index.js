model.exports  =  (app, req, res, method) => {
  const { users_controller } = app.controllers
  require('./users_routes')(users_controller, req, res, method)
}
