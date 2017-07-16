module.exports  =  (bundle) => {
  const { secretsPath } = bundle
  const config  =  {
    db: require('./db')(),
    allowed_models: require('./allowed_models')(),
    secrets: require('./secrets')(secretsPath),
    links: require('./links')()
  }
  return config
}
