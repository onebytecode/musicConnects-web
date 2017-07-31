//  GRAPH QL ARTIST TYPE

module.exports = (gql, controllers, types, typeConstructor) => {
  const { artistType, artistPlainType } = types
  const ARTIST_TYPE = 'Artists'
  const ARTIST_POPULATE = { path: 'bands.belong', model: 'Band' }

  const cArtistInput = new gql.GraphQLInputObjectType({
    name: 'ArtistInput',
    fields: {
      id: { type: gql.GraphQLInt },
      naming: { type: new gql.GraphQLInputObjectType({
        name: 'ArtistInputNaming',
        fields: {
          firstName: { type: gql.GraphQLString },
          secondName: { type: gql.GraphQLString },
          surname: { type: gql.GraphQLString }
        }
      })},
      fullName: { type: gql.GraphQLString },
      bands: { type: new gql.GraphQLInputObjectType({
        name: 'ArtistInputBands',
        fields: {
          current: { type: gql.GraphQLInt }
        }
      })}
    }
  })

  const artistQueries = {
    getType: artistType,
    createType: artistPlainType,
    updateType: artistPlainType,
    deleteType: artistPlainType
  }
  const artistConstructor = typeConstructor(artistQueries, cArtistInput, ARTIST_TYPE, ARTIST_POPULATE, controllers)

  const getArtist = artistConstructor.get
  const createArtist = artistConstructor.create
  const updateArtist = artistConstructor.update
  const deleteArtist = artistConstructor.delete

  const type = {
    getArtist: getArtist,
    createArtist: createArtist,
    updateArtist: updateArtist,
    deleteArtist: deleteArtist
  }
  return type

}
