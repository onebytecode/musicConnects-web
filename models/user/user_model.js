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
    aging: {
      day: String,
      month: String,
      year: String
    },
    bands: [{ type: Schema.Types.ObjectId, ref: 'Band' }],
    tokens: {
      regToken: String
    }
  })

  userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: '_id',
    startAt: 1
  })
  /*
    VIRTUALS
  */
  userSchema.virtual('name') // NAME
    .get(function() {
      return this.naming.fName + ' ' + this.naming.sName
    })
    .set(function(v) {
      const naming = v.split(/\s/)
      if (!naming) return
      this.naming.fName = naming[0]
      this.naming.sName = naming[1] ? naming[1] : ''
    })
  userSchema.virtual('age') // AGE
    .get(function() {
      const { day, month, year } = this.aging
      const dNow = new Date().getTime()
      const dPast = new Date(year + ' ' + month + ' ' + day)
      const years = new Date(dNow - dPast).getYear() - 70
      return years
    })
    .set(function(date) {
      const d = new Date(date)
      if (!d) throw new Error('Error date format ' + date)
      const day = d.getDay()
      const month = d.getMonth() + 1
      const year = d.getFullYear()
      this.aging.year = year
      this.aging.month = month
      this.aging.day = day
    })
  /* **** */
  const User  =  mongoose.model('User', userSchema)

  return User
}
