// GQL HELPERS ROOT

module.exports = () => {
  const tConstructor = require('./type_constructor')

  const helpers = {
    typeConstructor: tConstructor
  }

  return helpers
}
