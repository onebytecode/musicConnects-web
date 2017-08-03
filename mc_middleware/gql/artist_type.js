//  GRAPH QL ARTIST TYPE

module.exports = (gql, controllers, types, typeConstructor, { artistMixins }) => {
  const { artistType, artistPlainType, biographyInput } = types
  const ARTIST_TYPE = 'Artists'
  const ARTIST_POPULATE = { path: 'bands.belong', model: 'Band' }

  const { injectInput } = artistMixins

  const cArtistInput = new gql.GraphQLInputObjectType({
    name: 'ArtistInput',
    fields: injectInput({
      biography: { type: biographyInput }
    })
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
