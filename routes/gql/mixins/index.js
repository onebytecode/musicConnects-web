// ROOT OF GQL MIXINS

const gql = require('graphql')

module.exports = () => {
  const band = require('./band_mixins')(gql)
  const bio  = require('./bio_mixins')(gql)
  const user = require('./user_mixins')(gql)

  const mixins = {
    bandMixins: band,
    bioMixins: bio,
    userMixins: user
  }

  return mixins
}
