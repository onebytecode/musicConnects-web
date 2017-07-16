// ARTISTS CONTROLLER
const Promise  =  require('bluebird')
module.exports  =  (artists, helpers) => {
  const { crud_helper }  =  helpers
  const getArtist  =  (params, callback) => {
    return crud_helper.get(artists, params, (err, res) => {
      return callback(err, res)
    })
  }
  const createArtist  =  (params, callback) => {
    return crud_helper.create(artists, params, (err, res) => {
      return callback(err, res)
    })
  }
  const updateArtist  =  (params, callback) => {
    return crud_helper.update(artists, params, (err, res) => {
      return callback(err, res)
    })
  }
  const deleteArtist  =  (params, callback) => {
    return crud_helper.delete(artists, params, (err, res) => {
      return callback(err, res)
    })
  }

  const methods = {
    get: getArtist,
    create: createArtist,
    update: updateArtist,
    delete: deleteArtist
  }

  return methods
}
