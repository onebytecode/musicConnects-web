module.exports = (req, res, app, db) => {
  require('./resources_routes')(req, res, app, db)
}
