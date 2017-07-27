// USER MODEL TESTS

module.exports = ({mongoose}, expect, should) => {
  const User = mongoose.connection.model('User')
  describe('User model tests', () => {
    it ('it should create User with Name virtual', async () => {
      try {
        const user = await User.create({ _id: 1 , name: "User Perviy" })
        expect(user.name).to.be.equal('User Perviy')
      } catch(err) {
        throw new Error(err)
      }
    })
    it ('it should update user with id 1 with name virtual', async () => {
      try {
        const user = await User.findOne({ _id: 1})
        user.name = 'User Vtoroy'
        const uUser = user.save()
        expect(user.name).to.be.equal('User Vtoroy')
      } catch (err) {
        throw new Error(err)
      }
    })
  })

}
