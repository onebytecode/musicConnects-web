// GQL TYPES

module.exports = (gql, mixins) => {
  const { bandMixins, userMixins, artistMixins, bioMixins } = mixins

  const biographyType = new gql.GraphQLObjectType({
    name: 'Biography',
    fields: bioMixins.objectType
  })

  const biographyInput = new gql.GraphQLInputObjectType({
    name: 'BiographyInput',
    fields: bioMixins.inputType
  })

  const bandType  =  new gql.GraphQLObjectType({
    name: 'Band',
    fields: bandMixins.objectType
  })

  const userType  =  new gql.GraphQLObjectType({
    name: 'User',
    fields: userMixins.objectType
  })

  const artistType = new gql.GraphQLObjectType({
    name: 'Artist',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      naming: { type: new gql.GraphQLObjectType({
          name: 'ArtistNaming',
          fields: {
            firstName: { type: gql.GraphQLString },
            secondName: { type: gql.GraphQLString },
            surname: { type: gql.GraphQLString }
          }
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
      biography: { type: biographyType }
    }
  })

  const sUserType = new gql.GraphQLObjectType({
    name: 'UserType',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      age: { type: gql.GraphQLString },
      bands: { type: new gql.GraphQLList(bandType) },
      artists: { type: new gql.GraphQLList(artistType) }
    }
  })

  const sBandType = new gql.GraphQLObjectType({
    name: 'BandType',
    fields: bandMixins.injectObject({
      subscribers: { type: new gql.GraphQLList(userType) },
      biography: { type: biographyType }
    })
  })

  const sArtistType = new gql.GraphQLObjectType({
    name: 'ArtistType',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      naming: { type: new gql.GraphQLObjectType({
        name: 'ArtistTypeNaming',
        fields: {
          firstName: { type: gql.GraphQLString },
          secondName: { type: gql.GraphQLString },
          surname: { type: gql.GraphQLString }
        }
      })},
      bands: { type: new gql.GraphQLObjectType({
          name: 'ArtistBands',
          fields: {
            current: { type: bandType }
          }
        })
      },
      fullName: { type: gql.GraphQLString },
      biography: { type: biographyType }
    }
  })

  const types = {
    userPlainType: userType,
    userType: sUserType,
    bandPlainType: bandType,
    bandType: sBandType,
    artistPlainType: artistType,
    artistType: sArtistType,
    biographyInput: biographyInput
  }

  return types
}
