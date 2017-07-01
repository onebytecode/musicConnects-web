const ENV  =  process.env.NODE_ENV || 'dev'

const getUrl = () => {
  if (ENV === 'test') {
    return "mongodb://localhost:27017/test"
  } else {
    return "mongodb://localhost:27017/music_hub"
  }
}

const db = {
  url: getUrl()
}
module.exports = db
