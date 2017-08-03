// GQL BAND TYPE

module.exports = (gql, controllers, types, typeConstructor, mixins) => {
  const { bandType, bandPlainType, biographyInput } = types
  const { bandMixins } = mixins
  const BAND_TYPE = 'Bands'
  const BAND_POPULATE = 'subscribers'

  const cBandInput = new gql.GraphQLInputObjectType({
    name: 'BandInput',
    fields: {
      id: { type: gql.GraphQLInt },
      name: { type: gql.GraphQLString },
      subscribers: { type: new gql.GraphQLList(gql.GraphQLInt) },
      biography: { type: biographyInput }
    }
  })

  const bandQueries = {
    getType: bandType,
    createType: bandPlainType,
    updateType: bandPlainType,
    deleteType: bandPlainType
  }

  const bandConstructor = typeConstructor(bandQueries, cBandInput, BAND_TYPE, BAND_POPULATE, controllers)

  const getBand    = bandConstructor.get
  const createBand = bandConstructor.create
  const updateBand = bandConstructor.update
  const deleteBand = bandConstructor.delete

  const model = {
    getBand: getBand,
    createBand: createBand,
    updateBand: updateBand,
    deleteBand: deleteBand
  }

  return model
}
