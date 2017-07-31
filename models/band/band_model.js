// BAND MODEL
module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  /* define */
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

  /*  PLUGINS */
  bandSchema.plugin(autoIncrement.plugin, {
    model: 'Band',
    field: '_id',
    startAt: 1
  })

  const Biography = mongoose.connection.model('Biography')

  bandSchema.pre('save', function (next) {
    const self = this
    if(!this.biography) {
      Biography.create({ __creator: { kind: 'Bands', _id: self._id } }, (err, bio) => {
        if (err) {
          const e = new Error(err)
          next(err)
        }
        self.biography = bio._id
        next()
      })
    }
  })
  bandSchema.pre('findOne', function(next) {
    this.populate('biography')
    next()
  })
  bandSchema.pre('update', function(next) {
    this.populate('biography')
    next()
  })
  const Band  =  mongoose.model('Band', bandSchema)

  return Band
}
