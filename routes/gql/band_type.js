// BAND TYPE GQL

module.exports = (gql, controllers) => {
  const { bands_controller } = controllers
  const bandType  =  new gql.GraphQLObjectType({
    name: 'Band',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLString) },
      name: { type: gql.GraphQLString },
      artists: { type: gql.GraphQLArray }
    }
  })

  const getArgs = { id: gql.GraphQLString }

  const getFunc = async (id) => {
    const user = await bands_controller.get({_id: id})
    return user
  }

  const model = {
    type: userType,
    getArgs: getArgs,
    getFunc: getFunc
  }

  return model

}
