const ENV  =  process.env.NODE_ENV || 'dev'

const getUrl = () => {
  if (ENV === 'test') {
    return "mongodb://localhost:27017/test"
  } else if (ENV === 'production') {
    return "mongodb://mongoDB:27017/music_hub"
  } else {
    return "mongodb://localhost:27017/music_hub_dev"
  }
}

module.exports = () => {
  const db = {
    url: getUrl()
  }
  return db
}
