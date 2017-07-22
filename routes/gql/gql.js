// ROOT GRAPH QL
const { buildSchema } = require('graphql')
const gqlHTTP  =  require('express-graphql')

module.exports = (express, controllers) => {
  const { users_controller } = controllers
  const router = express.Router()
  const schema = buildSchema(`
    input UserInfo {
      name: String!
      age: String
    }
    type User {
      name: String
      age: String
    }
    type Mutation {
      createUser(input: UserInfo): User
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
    createUser: async ({ input }) => {
      const { name, age } = input
      const user = await users_controller.create({ name: name, age: age })
      console.log(user);
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
