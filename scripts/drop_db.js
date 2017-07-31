// SCRIPT FOR DROP DB

module.exports = async (mongoose, options = { silent: false }) => {
  const { silent } = options

  const dropAll = async () => {
    Object.keys(mongoose.connection.collections).forEach( async (key) => {
      const model = mongoose.connection.collections[key]
      try {
        console.log(model.name);
        if (model.name === 'identitycounters') return // 
        await model.remove({})
        return console.log('Model ' + key + ' successfully dropped!');
      } catch (e) {
        if (e.code === 26) return true // ns not found error
        return console.error(e);
      }
    })
  }

  const result = await dropAll()
  console.log(result);

}
