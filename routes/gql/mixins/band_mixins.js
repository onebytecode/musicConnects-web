// BAND MIXINS

module.exports = (gql) => {


  const objectType = {
    id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
    name: { type: gql.GraphQLString },
    biography: { type: gql.GraphQLInt },
    subscribers: { type: new gql.GraphQLList(gql.GraphQLInt) }
  }

  const { injectObject } = require('./helpers')({objectType: objectType})

  const mixins = {
    objectType,
    injectObject
  }

  return mixins
}
