// BAND MIXINS

module.exports = (gql) => {

  const injectObject = (val) => {
    if (typeof val !== 'object') throw new Error('InjectObject requires an Object type to proceed')
    const type = {}
     Object.keys(objectType).forEach(key => type[key] = objectType[key])
     Object.keys(val).forEach(key => type[key] = val[key])
     return type
  }

  const objectType = {
    id: { type: new gql.GraphQLNonNull(gql.GraphQLInt) },
    name: { type: gql.GraphQLString },
    biography: { type: gql.GraphQLInt },
    subscribers: { type: new gql.GraphQLList(gql.GraphQLInt) }
  }

  const mixins = {
    objectType: objectType,
    injectObject: injectObject
  }
  return mixins
}
