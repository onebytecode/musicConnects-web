// GQL USER TYPE

module.exports = (gql, controllers) => {
  const { users_controller } = controllers
  const userType  =  new gql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLString) },
      name: { type: gql.GraphQLString },
      age: { type: gql.GraphQLString }
    }
  })

  const getFunc = async (id) => {
    const user = await users_controller.get({_id: id})
    return user
  }
  const cUserInput = new gql.GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
      name: { type: new gql.GraphQLNonNull(gql.GraphQLString) },
      artists: { type: new gql.GraphQLList(gql.GraphQLString) }
    }
  })

  const createFunc = async (data) => {
    const { name, artists } = data
    const user = await users_controller.create({ name: name, artists: artists })
    return user
  }
  const getUser = {
    type: userType,
    args: { id : { type: gql.GraphQLString } },
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

  const model = {
    getUser: getUser,
    createUser: createUser
  }

  return model
}
