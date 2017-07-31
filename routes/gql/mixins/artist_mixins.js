// ARTIST GQL MIXINS

module.exports = (gql) => {

  const naming = {
    firstName: { type: gql.GraphQLString },
    secondName: { type: gql.GraphQLString },
    surname: { type: gql.GraphQLString }
  }

  const objectType = {
    id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
    naming: { type: new gql.GraphQLObjectType({
        name: 'ArtistNaming',
        fields: naming
      })
    },
    bands: {
      type: new gql.GraphQLObjectType({
        name: 'ArtistBandsPlain',
        fields: {
          current: { type: gql.GraphQLInt }
        }
      })
    },
    fullName: { type: gql.GraphQLString },
    biography: { type: gql.GraphQLInt }
  }

  const { injectObject } = require('./helpers')({objectType: objectType})

  const mixins = {
    objectType: objectType,
    injectObject: injectObject
  }

  return mixins
}
