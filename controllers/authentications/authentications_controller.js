// AUTHENTICATION CONTROLLER

module.exports = (models_controller, helpers, links) => {

  const authenticateUserByToken = (token, cb) => {
    const query = {
      tokens: {
        regToken: token
      }
    }
    models_controller.get({ name: 'Users' }, query, (err, user) => {
      cb(err, user)
    })
  }

  const methods = {
    authenticateUserByToken: authenticateUserByToken
  }
  return methods
}
