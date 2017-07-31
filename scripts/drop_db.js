// SCRIPT FOR DROP DB

module.exports = async (mongoose, options = { silent: false }) => {
  const { silent } = options

  const dropAll = async () => {
    Object.keys(mongoose.connection.collections).forEach( async (key) => {
      const model = mongoose.connection.collections[key]
      await model.drop()
      return console.log('Model ' + key + ' successfully dropped!');
    })
  }

  try {
    const result = await dropAll()
    console.log(result);
  } catch(err) {
    return console.error(err);
  }

}
