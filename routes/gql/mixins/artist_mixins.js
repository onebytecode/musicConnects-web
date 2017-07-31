// ARTIST GQL MIXINS

module.exports = (gql) => {

  const naming = {
    firstName: { type: gql.GraphQLString },
    secondName: { type: gql.GraphQLString },
    surname: { type: gql.GraphQLString }
  }

  const inputType = {
    id: { type: gql.GraphQLInt },
    naming: { type: new gql.GraphQLInputObjectType({
      name: 'ArtistInputNaming',
      fields: naming
    })},
    fullName: { type: gql.GraphQLString },
    bands: { type: new gql.GraphQLInputObjectType({
      name: 'ArtistInputBands',
      fields: {
        current: { type: gql.GraphQLInt }
      }
    })}
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

  const { injectObject, injectInput } = require('./helpers')({objectType: objectType, inputType: inputType })

  const mixins = {
    objectType,
    inputType,
    injectObject,
    injectInput
  }

  return mixins
}
