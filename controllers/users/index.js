// USERS CONTROLLER ROOT
module.exports = (users, h) => {
  return require('./users_controller')(users, h)
}
