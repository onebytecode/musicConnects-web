const GET            =  'GET'
const POST           =  'POST'
const DELETE         =  'DELETE'
const PUT            =  'PUT'
const gqlModule = require('./gql')

module.exports = (express, controllers) => {
  const { bands_controller, artists_controller, registration_controller, authentication_controller } = controllers
  const router = express.Router()

  router.route('/') // GET /
    .get((req, res) => { return require('./main')(req, res) })

  router.use('/gql', gqlModule(express, controllers))

  router.route('/public/*') // GET /public/*
    .get((req, res) => { return require('./resources')(req, res) })

  router.route('/band/:_id')
    .all((req, res) => {
      const { params, method } = req
      return require('./bands')(bands_controller, params, res, method)
    })
  router.route('/bands/')
    .post((req, res) => {
      const { body, method } = req
      const { band } = body
      return require('./bands')(bands_controller, band, res, method)
    })

  router.route('/user/registrate')
    .post((req, res) => {
      const { body, app } = req
      if (!body.user) return res.sendStatus(400)
      const { mail } = body.user
      registration_controller.registrateUserByEmail(mail, (err, data) => {
        if (err) return res.sendStatus(401)
        return res.send(data)
      })
    })

  router.route('/user/authorize')
    .get((req, res) => {
      const { query, app } = req
      if (!query) return res.sendStatus(401)
      if (!query.token) return res.sendStatus(401)
      const { token } = query
      authentication_controller.authenticateUserByToken(token, (err, data) => {
        if (err) return res.sendStatus(401)
        if (!data) return res.sendStatus(401)
        return res.send(data)
      })
    })

    router.route('/connectivity_test')
      .get((req, res) => {
        res.sendStatus(200)
      })

    return router

}
