// MIXINS HELPERS

module.exports = ({ objectType }) => {
  const injectObject = (val) => {
    if (typeof val !== 'object') throw new Error('InjectObject requires an Object type to proceed')
    const type = {}
     Object.keys(objectType).forEach(key => type[key] = objectType[key])
     Object.keys(val).forEach(key => type[key] = val[key])
     return type
  }

  const h = {
    injectObject: injectObject
  }

  return h
}
