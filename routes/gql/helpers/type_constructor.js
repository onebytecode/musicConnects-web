// GQL TYPES CONSTRUCTOR
const gql      = require('graphql')
module.exports = (modelTypes, cModelInput, mName, mPopulate = '', controllers) => {
  const { models_controller } = controllers
  const { getType, createType, deleteType, updateType } = modelTypes

  const getFunc = async (id) => {
    const {error, model} = await models_controller.get({
      name: mName
    }, {
      mParams: { _id: id },
      mPopulate: mPopulate
    })
    if (error) throw new Error(error)
    return model
  }

  const createFunc = async (data) => {
    const { error, model } = await models_controller.create({
      name: mName
    }, data)
    if (error) throw new Error(error)
    return model
  }

  const updateFunc = async (data) => {
    const { error, model } = await models_controller.update({
      name: mName
    }, data)
    if (error) return console.error(error);
    return model
  }

  const deleteFunc = async (data) => {
    const {error, model} = await models_controller.delete({
      name: mName
    }, data)
    if (error) throw new Error(error)
    return model
  }

  /*      */
  const getModel = {
    type: getType,
    args: { id: { type: gql.GraphQLInt } },
    resolve: async function(_, {id}) {
      const model = await getFunc(id)
      return model
    }
  }

  const createModel = {
    type: createType,
    args: {
      data: { type: new gql.GraphQLNonNull(cModelInput) }
    },
    resolve: async function(_, {data}) {
      const model = await createFunc(data)
      return model
    }
  }

  const updateModel = {
    type: updateType,
    args: {
      data: { type: new gql.GraphQLNonNull(cModelInput) }
    },
    resolve: async function (_, {data}) {
      const model = await updateFunc(data)
      return model
    }
  }

  const deleteModel = {
    type: deleteType,
    args: {
      data: { type: new gql.GraphQLNonNull(cModelInput) }
    },
    resolve: async function(_, {data}) {
      const model = await deleteFunc(data)
      return model
    }
  }

  const type = {
    get: getModel,
    create: createModel,
    update: updateModel,
    delete: deleteModel
  }
  return type
}
