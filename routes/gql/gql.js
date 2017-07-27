// ROOT GRAPH QL
const gql      = require('graphql')
const gqlHTTP  = require('express-graphql')

module.exports = (express, controllers) => {
  const { users_controller } = controllers
  const types = require('./types')(gql)
  const userType = require('./user_type')(gql, controllers, types)
  const bandType = require('./band_type')(gql, controllers, types)
  const artistType = require('./artist_type')(gql, controllers, types)
  const router = express.Router()
  const queryType = new gql.GraphQLObjectType({
    name: 'Query',
    fields: {
      getUser: userType.getUser,
      getBand: bandType.getBand,
      getArtist: artistType.getArtist
    }
  })

  const mutationType = new gql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: userType.createUser,
      updateUser: userType.updateUser,
      createBand: bandType.createBand,
      updateBand: bandType.updateBand,
      createArtist: artistType.createArtist
    }
  })
  const schema = new gql.GraphQLSchema({query: queryType, mutation: mutationType})

  router.use('/', gqlHTTP({
    schema: schema,
    graphiql: true
  }))

  return router
}
