// USERS CONTROLLER
const Promise  =  require('bluebird')
module.exports  =  (users, helpers) => {
  const { crud_helper }  =  helpers
  const getUser  =  async (params, callback = () => {}) => {
    let user, err
    try {
      user = await crud_helper.get(users, params)
      callback(null, user)
      return { error: null, user: user }
    } catch(ex) {
      err = ex
      callback(err, null)
      return { error: err, user: null}
    }
  }
  const createUser = async (params, callback = () => {}) => {
    try {
      let user = await crud_helper.create(users, params)
      callback(null, user)
      return { error: null, user: user }
    } catch (err) {
      callback(err)
      return { error: err, user: null }
    }
  }
  const updateUser  =  async (params, callback = () => {}) => {
    try {
      let user = await crud_helper.update(users, params)
      callback(null, user)
      return { error: null, user: user }
    } catch(err) {
      callback(err)
      return { error: err, user: null }
    }
  }
  const deleteUser  =  async (params, callback = () => {}) => {
    try {
      const user = await crud_helper.delete(users, params)
      callback(null, user)
      return { error: null, user: user }
    } catch (err) {
      callback(err)
      return { error: err, user: null }
    }
  }

  const methods = {
    get: getUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser
  }
  return methods
}
