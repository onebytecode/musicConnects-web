// API V1 GRAPH QL
const { buildSchema } = require('graphql')
const gqlHTTP = require('express-graphql')

module.exports = (controllers) => {
  const { users_controller } = controllers
  const schema = buildSchema(`
    type uName {
      fName: String
      sName: String
    }
    type User {
      _id: Int
      name: uName
    }
    type Mutation {
      createUser(name: String): User
    }
    type Query {
      getUser(_id: Int!): User
    }
  `)

  const root = {
    getUser: ({_id}) => {
      let User
      users_controller.get({ _id: _id }, (err, user) => {
        User = user
      })
      return User
    },
    createUser: async ({ name }) => {
      let User = await users_controller.create({ naming: { fName: name } })
      return User
    }
  }

  const gqlModule = gqlHTTP({
    rootValue: root,
    schema: schema,
    graphiql: true
  })

  return gqlModule

}
