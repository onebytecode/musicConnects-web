module.exports  =  () => {
  const config  =  {
    db: require('./db')(),
    allowed_models: require('./allowed_models')()
  }
  return config
}
