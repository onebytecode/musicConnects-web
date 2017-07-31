// USER MIXINS

module.exports = (gql) => {

  const objectType = {
    id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
    name: { type: gql.GraphQLString },
    age: { type: gql.GraphQLString },
    bands: { type: new gql.GraphQLList(gql.GraphQLInt) },
    artists: { type: new gql.GraphQLList(gql.GraphQLInt) }
  }

  const { injectObject } = require('./helpers')({ objectType: objectType })

  const mixins = {
    objectType: objectType,
    injectObject: injectObject
  }

  return mixins
}
