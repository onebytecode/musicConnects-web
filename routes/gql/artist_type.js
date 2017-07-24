//  GRAPH QL ARTIST TYPE

module.exports = (gql, controllers, types) => {
  const { models_controller } = controllers
  const { artistType } = types

  const cArtistInput = new gql.GraphQLInputObjectType({
    name: 'ArtistInput',
    fields: {
      naming: { type: new gql.GraphQLInputObjectType({
        name: 'ArtistInputNaming',
        fields: {
          firstName: { type: gql.GraphQLString },
          secondName: { type: gql.GraphQLString },
          surname: { type: gql.GraphQLString }
        }
      })},
      bands: { type: new gql.GraphQLInputObjectType({
        name: 'ArtistInputBands',
        fields: {
          belong: { type: gql.GraphQLInt }
        }
      })}
    }
  })

  const getFunc = async (id) => {
    const {error, model} = await models_controller.get({
      name: 'Artists'
    }, {
      mParams: { _id: id },
      mPopulate: { path: 'bands.belong', model: 'Band' }
    })
    if (error) throw new Error(error)
    return model
  }

  const createFunc = async (data) => {
    const { naming, bands } = data
    const { error, model } = await models_controller.create({
      name: 'Artists'
    }, {
      naming: naming,
      bands: bands
    })
    if (error) throw new Error(error)
    return model
  }

  const getArtist = {
    type: artistType,
    args: { id: { type: gql.GraphQLInt } },
    resolve: async function(_, {id}) {
      const artist = await getFunc(id)
      return artist
    }
  }

  const createArtist = {
    type: artistType,
    args: {
      data: { type: new gql.GraphQLNonNull(cArtistInput) }
    },
    resolve: async function(_, {data}) {
      const artist = await createFunc(data)
      return artist
    }
  }

  const type = {
    getArtist: getArtist,
    createArtist: createArtist
  }
  return type

}
