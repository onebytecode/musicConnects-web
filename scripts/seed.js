// SCRIPT FOR SEED DATABASE
import { green } from 'colors'

module.exports = async (mongoose, options = { silent: false, amount: { users: 50, artists: 50, bands: 50 } }) => {
  const { silent, amount: { users: usersAmount, artists: artistsAmount, bands: bandsAmount } } = options

  const Band = mongoose.connection.models['Band']
  const User = mongoose.connection.models['User']
  const Artist = mongoose.connection.models['Artist']

  const bandNames = ['Some', 'Band', 'Guns', 'Metal', 'Kambala', 'Dunai', 'Speed', 'Yummie', 'Crack', 'Gone', 'Bash', 'Slice']
  const artistNames = ['Cool', 'Nega', 'John', 'BB', 'Rare', 'Daddy', 'Gerold', 'James', 'Winny', 'Smith', 'Baron', 'Semen']
  const userNames = ['Mao', 'Shaun', 'Walker', 'Mick', 'Smile', 'Aden', 'Milestone', 'Mandatory', 'Post', 'Joy']

  Array.prototype.shuffle = function() {
    const shuffled = []
    const l = this.length
    const r = parseInt(Math.random() * 3)
    for (let i = 0; i <= r; i++) {
      const index = parseInt(Math.random()*l)
      shuffled.push(this[index])
    }
    return shuffled.join(' ')
  }

  Array.prototype.numberize = function(range, limit = 5) {
    const nums = []
    const r = []
    for (let i = 0; i < range; i++) { r.push(i) }
    const repeats = parseInt(Math.random() * limit)
    for (let i = 0; i < repeats; i++ ) { nums.push(r[parseInt(Math.random() * range)]) }
    return nums
  }


  const createBands = async (Band, bandNames, count) => {
    if (!silent) console.log('Creating Bands');
    var c = 0
    while (c < count) {
      const band = await Band.create({
        _id: c,
        name: bandNames.shuffle(),
        subscribers: [].numberize(count)
      })
      if (!silent) console.log('Created band ', band.name);
      c++
    }
    console.log('All bands created');
  }

  const createUsers = async (User, userNames, count) => {
    if (!silent) console.log('Creating Users');
    var c = 0
    while (c < count) {
      const user = await User.create({
        _id: c,
        name: userNames.shuffle(),
        bands: [].numberize(count),
        artists: [].numberize(count)
      })
      if (!silent) console.log('Created user ', user.name);
      c++
    }
    console.log('All users created');
  }

  const createArtists = async (Artist, artistNames, count) => {
    if(!silent) console.log('Creating Artists');
    var c = 0
    while (c < count) {
      const artist = await Artist.create({
        _id: c,
        fullName: artistNames.shuffle(),
        bands: {
          belong: parseInt(Math.random() * count)
        }
      })
      if(!silent) console.log('Created artist ', artist.fullName);
      c++
    }
    console.log('All artists created');
  }


  try {
    console.log(green('Seeding database'));
    await createBands(Band, bandNames, bandsAmount)
    await createArtists(Artist, artistNames, artistsAmount)
    await createUsers(User, userNames, usersAmount)
    console.log(green('Seeding complete'));
  } catch (err) {
    if (err.code === 11000) {
      return console.log('Seed already done');
    }
    return console.log(err);
  }


}
