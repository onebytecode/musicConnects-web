// USER MIXINS

module.exports = (gql) => {

  const objectType = {
    id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
    name: { type: gql.GraphQLString },
    age: { type: gql.GraphQLString }
  }

  const mixins = {
    objectType: objectType
  }

  return mixins
}
