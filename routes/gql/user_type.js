// GQL USER TYPE

module.exports = (gql, controllers, types, typeConstructor) => {
  const { models_controller } = controllers
  const { userType, userPlainType } = types
  const USER_TYPE = 'Users'
  const USER_POPULATE = 'bands artists'

  const cUserInput = new gql.GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
      id: { type: gql.GraphQLInt },
      name: { type: gql.GraphQLString },
      age:  { type: gql.GraphQLString },
      bands: { type: new gql.GraphQLList(gql.GraphQLInt) },
      artists: { type: new gql.GraphQLList(gql.GraphQLInt) }
    }
  })

  const userQueries = {
    getType: userType,
    createType: userPlainType,
    deleteType: userPlainType,
    updateType: userPlainType
  }

  const userConstructor = typeConstructor(userQueries, cUserInput, USER_TYPE, USER_POPULATE, controllers)
  const getUser    = userConstructor.get
  const createUser = userConstructor.create
  const updateUser = userConstructor.update
  const deleteUser = userConstructor.delete

  const model = {
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
  }

  return model
}
