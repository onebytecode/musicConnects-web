// GQL TYPES

module.exports = (gql) => {
  const bandType  =  new gql.GraphQLObjectType({
    name: 'Band',
    fields: {
      id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
      name: { type: gql.GraphQLString },
      subscribers: { type: new gql.GraphQLList(userType) }
    }
  })
  // const userType  =  new gql.GraphQLObjectType({
  //   name: 'User',
  //   fields: {
  //     id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
  //     name: { type: gql.GraphQLString },
  //     age: { type: gql.GraphQLString },
  //     bands: { type: new gql.GraphQLList(bandType) }
  //   }
  // })
}
