// GQL BAND TYPE

module.exports = (gql, controllers, types) => {
  const { models_controller } = controllers
  const { bandType } = types

  const getFunc = async (id) => {
    const {error, model} = await models_controller.get({ name: 'Bands' },
    { mParams: {_id: id}, mPopulate: 'subscribers' })
    if (error) throw new Error(error)
    return model
  }
  const cBandInput = new gql.GraphQLInputObjectType({
    name: 'BandInput',
    fields: {
      name: { type: new gql.GraphQLNonNull(gql.GraphQLString) },
      subscribers: { type: new gql.GraphQLList(gql.GraphQLInt) }
    }
  })

  const createFunc = async (data) => {
    const { name, subscribers } = data
    const { error, model } = await models_controller.create({
      name: 'Bands'
    }, {
      name: name,
      subscribers: subscribers
    })
    if (error) throw new Error(error)
    return model
  }
  const getBand = {
    type: bandType,
    args: { id : { type: gql.GraphQLInt } },
    resolve: async function(_, {id}) {
      const band = await getFunc(id)
      return band
    }
  }
  const createBand = {
    type: bandType,
    args: {
      data: { type: new gql.GraphQLNonNull(cBandInput) }
    },
    resolve: async function(_, {data}) {
      const band = await createFunc(data)
      return band
    }
  }

  const model = {
    getBand: getBand,
    createBand: createBand
  }

  return model
}
