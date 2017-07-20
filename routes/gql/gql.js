// ROOT GRAPH QL
const { buildSchema } = require('graphql')
const gqlHTTP  =  require('express-graphql')

module.exports = (express, controllers) => {
  const { users_controller } = controllers
  const router = express.Router()
  const schema = buildSchema(`
    type User {
      name: String
      mails: [String]
    }
    type Mutation {
      createUser(name: String!): User
    }
    type Query {
      getUser(_id: Int!): User
    }
  `)

  const root = {
    getUser: async ({ _id }) => {
      const user = await users_controller.get({ _id: _id })
      return user
    },
    createUser: async ({ name }) => {
      const user = await users_controller.create({ name: name })
      return user
    }
  }

  router.use('/', gqlHTTP({
    rootValue: root,
    schema: schema,
    graphiql: true
  }))

  return router
}
