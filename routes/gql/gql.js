// ROOT GRAPH QL
const gql      = require('graphql')
const gqlHTTP  = require('express-graphql')

module.exports = (express, controllers) => {
  const { users_controller } = controllers
  const userType = require('./user_type')(gql, controllers)
  const bandType = require('./band_type')(gql, controllers)
  const router = express.Router()
  const queryType = new gql.GraphQLObjectType({
    name: 'Query',
    fields: {
      getUser: userType.getUser,
      getBand: bandType.getBand
    }
  })

  const mutationType = new gql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: userType.createUser,
      createBand: bandType.createBand
    }
  })
  const schema = new gql.GraphQLSchema({query: queryType, mutation: mutationType})

  router.use('/', gqlHTTP({
    schema: schema,
    graphiql: true
  }))

  return router
}
