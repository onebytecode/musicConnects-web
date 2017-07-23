// GQL BAND TYPE

module.exports = (gql, controllers) => {
  const { bands_controller } = controllers
  const userType  =  new gql.GraphQLObjectType({
    name: 'UserObject',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      age: { type: gql.GraphQLString },
      test: { type: gql.GraphQLString }
    }
  })
  const bandType  =  new gql.GraphQLObjectType({
    name: 'Band',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      subscribers: { type: new gql.GraphQLList(userType) }
    }
  })

  const getFunc = async (id) => {
    const band = await bands_controller.get({ mParams: {_id: id}, mPopulate: 'subscribers' })
    return band
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
    const band = await bands_controller.create({ name: name, subscribers: subscribers })
    return band
  }
  const getBand = {
    type: bandType,
    args: { id : { type: gql.GraphQLInt } },
    resolve: async function(_, {id}) {
      const band = await getFunc(id)
      console.log(band);

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
