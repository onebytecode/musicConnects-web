// AUTHENTICATION CONTROLLER

module.exports = (users_controller, helpers, links) => {

  const authenticateUserByToken = (token, cb) => {
    const query = {
      tokens: {
        regToken: token
      }
    }
    users_controller.get(query, (err, user) => {
      cb(err, user)
    })
  }

  const methods = {
    authenticateUserByToken: authenticateUserByToken
  }
  return methods
}
