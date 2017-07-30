// ROOT GRAPH QL
const gql      = require('graphql')
const gqlHTTP  = require('express-graphql')

module.exports = (express, controllers) => {
  const { users_controller } = controllers
  const mixins = require('./mixins')()
  const types = require('./types')(gql, mixins)
  const { typeConstructor } = require('./helpers')()
  const userType = require('./user_type')(gql, controllers, types, typeConstructor, mixins)
  const bandType = require('./band_type')(gql, controllers, types, typeConstructor, mixins)
  const artistType = require('./artist_type')(gql, controllers, types, typeConstructor, mixins)
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
      deleteUser: userType.deleteUser,
      createBand: bandType.createBand,
      updateBand: bandType.updateBand,
      deleteBand: bandType.deleteBand,
      createArtist: artistType.createArtist,
      updateArtist: artistType.updateArtist,
      deleteArtist: artistType.deleteArtist
    }
  })

  const schema = new gql.GraphQLSchema({query: queryType, mutation: mutationType})

  router.use('/', gqlHTTP({
    schema: schema,
    graphiql: true
  }))

  return router
}
