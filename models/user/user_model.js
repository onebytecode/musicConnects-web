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
  userSchema.virtual('name')
    .get(function() {
      return this.naming.fName + ' ' + this.naming.sName
    })
    .set(function(v) {
      const naming = v.split(/\s/)
      if (!naming) return
      this.naming.fName = naming[0]
      this.naming.sName = naming[1] ? naming[1] : ''
    })
  const User  =  mongoose.model('User', userSchema)

  return User
}
