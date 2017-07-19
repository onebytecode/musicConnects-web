// API V1

module.exports = (router, controllers) => {
  const { registration_controller, authentication_controller } = controllers
  const gqlModule = require('./gql')(controllers)

  router.use('/gql', gqlModule)
  router.route('/user_registrate')
    .post((req, res) => {
      const { body } = req
      if (!body) return res.sendStatus(401)
      if (!body.user) return res.sendStatus(401)
      if (!body.user.mail) return res.sendStatus(401)
      const { mail } = body.user
      registration_controller.registrateUserByEmail(mail, (err, data) => {
        if (err) return res.sendStatus(401)
        return res.send(data)
      })
    })

  router.route('/user_authenticate')
    .get((req, res) => {
      const { query } = req
      if (!query) return res.sendStatus(401)
      if (!query.token) return res.sendStatus(401)
      const { token } = query
      authentication_controller.authenticateUserByToken(token, (err, data) => {
        if (err) return res.sendStatus(401)
        return res.send(data)
      })
    })

    return router
}
