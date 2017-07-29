// BIOGRAPHY MIXINS

module.exports = (gql) => {

  const history = {
    date: { type: gql.GraphQLString },
    story: { type: gql.GraphQLString }
  }
  const objectType = {
    id: { type: gql.GraphQLInt },
    foundation: { type: new gql.GraphQLObjectType({
      name: 'BioFoundation',
      fields: history
    })},
    popularization: { type: new gql.GraphQLObjectType({
      name: 'BioPop',
      fields: history
    })},
    nowadays: { type: gql.GraphQLString }
  }

  const inputType = {
    foundation: { type: new gql.GraphQLInputObjectType({
      name: 'BioFoundationInput',
      fields: history
    })},
    popularization: { type: new gql.GraphQLInputObjectType({
      name: 'BioPopInput',
      fields: history
    })},
    nowadays: { type: gql.GraphQLString }
  }

  const mixins = {
    objectType: objectType,
    inputType: inputType
  }

  return mixins
}
