module.exports = (controller, params, res, method) => {
  require('./bands_routes')(controller, params, res, method)
}
