// GQL USER TYPE

module.exports = (gql, controllers, types) => {
  const { models_controller } = controllers
  const { userType } = types

  const cUserInput = new gql.GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
      id: { type: gql.GraphQLInt },
      name: { type: new gql.GraphQLNonNull(gql.GraphQLString) },
      age:  { type: gql.GraphQLString },
      bands: { type: new gql.GraphQLList(gql.GraphQLInt) },
      artists: { type: new gql.GraphQLList(gql.GraphQLInt) }
    }
  })

  const getFunc = async (id) => {
    const { error, model } = await models_controller.get({
      name: 'Users'
    }, {
      mParams: { _id: id},
      mPopulate: 'bands artists'
    })
    if (error) throw new Error(error)
    return model
  }

  const createFunc = async (data) => {
    const { name, age, bands, artists } = data
    const { error, model } = await models_controller.create({
      name: 'Users'
    }, {
      name: name,
      age: age,
      bands: bands,
      artists: artists
    })
    if (error) throw new Error(error)
    return model
  }
  const updateFunc = async (data) => {
    const {error, model} = await models_controller.update({
      name: 'Users'
    }, data)
    if (error) throw new Error(error)
    return model
  }
  const getUser = {
    type: userType,
    args: { id : { type: gql.GraphQLInt } },
    resolve: async function(_, {id}) {
      const user = await getFunc(id)
      return user
    }
  }
  const createUser = {
    type: userType,
    args: {
      data: { type: new gql.GraphQLNonNull(cUserInput) }
    },
    resolve: async function(_, {data}) {
      const user = await createFunc(data)
      return user
    }
  }

  const updateUser = {
    type: userType,
    args: {
      data: { type: new gql.GraphQLNonNull(cUserInput) }
    },
    resolve: async function(_, {data}) {
      const user = await updateFunc(data)
      return user
    }
  }

  const model = {
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser
  }

  return model
}
