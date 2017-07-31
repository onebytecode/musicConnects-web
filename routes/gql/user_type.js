// GQL USER TYPE

module.exports = (gql, controllers, types, typeConstructor, { userMixins }) => {
  const { models_controller } = controllers
  const { userType, userPlainType } = types
  const USER_TYPE = 'Users'
  const USER_POPULATE = 'bands artists'

  const { inputType } = userMixins
  const cUserInput = new gql.GraphQLInputObjectType({
    name: 'UserInput',
    fields: inputType
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
    getUser,
    createUser,
    updateUser,
    deleteUser
  }

  return model
}
