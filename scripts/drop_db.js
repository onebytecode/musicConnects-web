// SCRIPT FOR DROP DB

const { green } = require('colors')
module.exports = async (mongoose, options = { silent: false }) => {
  const { silent } = options

  const dropAll = async () => {
    Object.keys(mongoose.connection.collections).forEach( async (key) => {
      const model = mongoose.connection.collections[key]
      if (model.name === 'identitycounters') return '' //
      await model.remove({})
      return 'Model ' + key + ' successfully dropped!'
    })
  }

  try {
    const result = await dropAll()
    if (!silent) {
      return console.log(result);
    }
    console.log(green('All models successfully dropped!'));
  } catch (e) {
    console.error(e);
  }

}
