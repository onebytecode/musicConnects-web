// BAND MODEL
module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  const bandSchema = new Schema({
    _id: { type: Number, required: true },
    name: String,
    artists: Array,
    years: String,
    albums: Array,
    tours: Array,
    ratings: Array,
    additional_info: Array,
    biography: { type: Number, ref: 'Biography'},
    subscribers: [{ type: Number, ref: 'User'}],
    artists: [{ type: Number, ref: 'Artist' }]
  })

  bandSchema.plugin(autoIncrement.plugin, {
    model: 'Band',
    field: '_id',
    startAt: 1
  })
  const Biography = mongoose.connection.model('Biography')

  bandSchema.pre('save', function (done) {
    const self = this
    if(!this.biography) {
      Biography.create({}, (err, bio) => {
        if (err) throw new Error(err)
        self.biography = bio._id
        done()
      })
    }
  })
  bandSchema.pre('findOne', function(done) {
    this.populate('biography')
    done()
  })
  const Band  =  mongoose.model('Band', bandSchema)


  return Band
}
