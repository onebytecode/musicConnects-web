// SCRIPT FOR DROP DB

module.exports = async (mongoose, options = { silent: false }) => {
  const { silent } = options

  const dropAll = async () => {
    Object.keys(mongoose.connection.collections).forEach( async (key) => {
      const model = mongoose.connection.collections[key]
      try {
        await model.drop()
        return console.log('Model ' + key + ' successfully dropped!');
      } catch(err) {
        return console.error(err);
      }
    })
  }

  try {
    await dropAll()
    console.log('Db dropped ');
  } catch(err) {
    return console.error(err);
  }

}
