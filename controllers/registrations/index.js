// REGISTRATIONS CONTROLLER ROOT
module.exports = (users_controller, helpers, l) => {
  return require('./registrations_controller')(users_controller, helpers, l)
}
