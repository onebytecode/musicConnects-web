// GQL TYPES

module.exports = (gql, mixins) => {
  const { bandMixins, userMixins, artistMixins, bioMixins } = mixins
  const TYPES = { }

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
    fields: artistMixins.objectType
  })

  const mTypes = {
    artist: artistType,
    user: userType,
    band: bandType,
    bio: biographyType
  }

  const sUserType = new gql.GraphQLObjectType({
    name: 'UserType',
    fields: userMixins.injectObject({
      bands: { type: new gql.GraphQLList(bandType) },
      artists: { type: new gql.GraphQLList(artistType) }
    })
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
    fields: artistMixins.injectObject({
      bands: { type: new gql.GraphQLObjectType({
          name: 'ArtistBands',
          fields: {
            current: { type: bandType }
          }
        })
      },
      biography: { type: biographyType }
    })
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
