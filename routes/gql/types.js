// GQL TYPES

module.exports = (gql) => {
  const bandType  =  new gql.GraphQLObjectType({
    name: 'Band',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString }
    }
  })
  const userType  =  new gql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      age: { type: gql.GraphQLString }
    }
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
      }
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
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      subscribers: { type: new gql.GraphQLList(userType) }
    }
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
            belong: { type: bandType }
          }
        })
      }
    }
  })

  const types = {
    bandType: sBandType,
    userType: sUserType,
    artistType: sArtistType
  }

  return types
}
