// GQL TYPES

module.exports = (gql) => {
  const biographyType = new gql.GraphQLObjectType({
    name: 'Biography',
    fields: {
      id: { type: gql.GraphQLInt },
      foundation: { type: new gql.GraphQLObjectType({
        name: 'BioFoundation',
        fields: {
          date: { type: gql.GraphQLString },
          story: { type: gql.GraphQLString }
        }
      })},
      popularization: { type: new gql.GraphQLObjectType({
        name: 'BioPop',
        fields: {
          date: { type: gql.GraphQLString },
          story: { type: gql.GraphQLString }
        }
      })},
      nowadays: { type: gql.GraphQLString }
    }
  })

  const biographyInput = new gql.GraphQLInputObjectType({
    name: 'BiographyInput',
    fields: {
      id: { type: gql.GraphQLInt },
      foundation: { type: new gql.GraphQLInputObjectType({
        name: 'BioFoundationInput',
        fields: {
          date: { type: gql.GraphQLString },
          story: { type: gql.GraphQLString }
        }
      })},
      popularization: { type: new gql.GraphQLInputObjectType({
        name: 'BioPopInput',
        fields: {
          date: { type: gql.GraphQLString },
          story: { type: gql.GraphQLString }
        }
      })},
      nowadays: { type: gql.GraphQLString }
    }
  })
  const bandType  =  new gql.GraphQLObjectType({
    name: 'Band',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      biography: { type: biographyType }
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
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      subscribers: { type: new gql.GraphQLList(userType) },
      biography: { type: biographyType }
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
      },
      fullName: { type: gql.GraphQLString },
      biography: { type: biographyType }
    }
  })

  const types = {
    bandType: sBandType,
    userType: sUserType,
    artistType: sArtistType,
    biographyInput: biographyInput
  }

  return types
}
