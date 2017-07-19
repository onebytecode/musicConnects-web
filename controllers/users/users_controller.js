// USERS CONTROLLER
const Promise  =  require('bluebird')
module.exports  =  (users, helpers) => {
  const { crud_helper }  =  helpers
  const getUser  =  (params, callback) => {
    return crud_helper.get(users, params, (err, model) => {
      return callback(err, model)
    })
  }
  const createUser = async (params, callback = () => {}) => {
    console.log(params);
    let user = await crud_helper.create(users, params)
    callback(null, user)
    return user
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
