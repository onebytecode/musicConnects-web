// USER MODEL
module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  const userSchema = new Schema({
    _id: { type: Number, required: true },
    naming: {
      fName: String,
      sName: String
    },
    ranks: {
      karma: Array
    },
    mails: {
      mcMail: String,
      tweetMail: String,
      fbMail: String,
      vkMail: String,
      gMail: String,
      otherMails: Array
    },
    gender: String,
    age: Date,
    tokens: {
      regToken: String
    }
  })

  userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: '_id',
    startAt: 1
  })
  userSchema.virtual('fullName')
    .get(function() {
      return this.naming.fName + ' ' + this.naming.sName
    })
  const User  =  mongoose.model('User', userSchema)

  return User
}
