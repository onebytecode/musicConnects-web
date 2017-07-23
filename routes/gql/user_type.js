// GQL USER TYPE

module.exports = (gql, controllers) => {
  const { users_controller } = controllers
  const bandType  =  new gql.GraphQLObjectType({
    name: 'BandObject',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      subscribers: { type: new gql.GraphQLList(gql.GraphQLInt) }
    }
  })
  const userType  =  new gql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      age: { type: gql.GraphQLString },
      bands: { type: new gql.GraphQLList(bandType) },
      test: { type: gql.GraphQLString }
    }
  })

  const getFunc = async (id) => {
    const user = await users_controller.get({ mParams: {_id: id}, mPopulate: 'bands' })
    return user
  }
  const cUserInput = new gql.GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
      name: { type: new gql.GraphQLNonNull(gql.GraphQLString) },
      age:  { type: gql.GraphQLString },
      bands: { type: new gql.GraphQLList(gql.GraphQLInt) }
    }
  })

  const createFunc = async (data) => {
    const { name, bands, age } = data
    const user = await users_controller.create({ name: name, bands: bands, age: age })
    return user
  }
  const getUser = {
    type: userType,
    args: { id : { type: gql.GraphQLInt } },
    resolve: async function(_, {id}) {
      const user = await getFunc(id)
      console.log(user);

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
