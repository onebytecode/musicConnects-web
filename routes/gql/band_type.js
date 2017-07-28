// GQL BAND TYPE

module.exports = (gql, controllers, types, typeConstructor) => {
  const { bandType } = types
  const BAND_TYPE = 'Bands'
  const BAND_POPULATE = 'subscribers'

  const cBandInput = new gql.GraphQLInputObjectType({
    name: 'BandInput',
    fields: {
      id: { type: gql.GraphQLInt },
      name: { type: new gql.GraphQLNonNull(gql.GraphQLString)  },
      subscribers: { type: new gql.GraphQLList(gql.GraphQLInt) }
    }
  })

  const bandConstructor = typeConstructor(bandType, cBandInput, BAND_TYPE, BAND_POPULATE, controllers)

  const getBand = bandConstructor.get
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
