// USERS CONTROLLER
const Promise  =  require('bluebird')
module.exports  =  (users, helpers) => {
  const { crud_helper }  =  helpers
  const getUser  =  async (params, callback = () => {}) => {
    let user, err
    try {
       user = await crud_helper.get(users, params)
       callback(null, user)
       return user
    } catch(ex) {
      err = ex
      callback(err, null)
      return err
    }
  }
  const createUser = async (params, callback = () => {}) => {
    try {
      let user = await crud_helper.create(users, params)
      callback(null, user)
      return user
    } catch (err) {
      callback(err)
      return err
    }
  }
  const updateUser  =  (params, callback) => {
    return crud_helper.update(users, params, (err, model) => {
      return callback(err, model)
    })
  }
  const deleteUser  =  (params, callback) => {
    return crud_helper.delete(users, params, (err, model) => {
        return callback(err, model)
    })
  }

  const methods = {
    get: getUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser
  }
  return methods
}
