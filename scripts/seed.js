// SCRIPT FOR SEED DATABASE

module.exports = async ({mongoose}) => {
  const Band = mongoose.connection.models['Band']
  const User = mongoose.connection.models['User']
  const Artist = mongoose.connection.models['Artist']

  const bandNames = ['Some', 'Band']
  const artistNames = ['Cool', 'Nega', 'John']
  const userNames = ['Mao', 'Shaun', 'Walker']

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


  const createBands = async (Band, bandNames, count) => {
    console.log('Creating Bands');
    var c = 0
    while (c < count) {
      const band = await Band.create({
        _id: c,
        name: bandNames.shuffle()
      })
      console.log('Created band ', band.name);
      c++
    }
    console.log('All bands created');
  }

  const createUsers = async (User, userNames, count) => {
    console.log('Creating Users');
    var c = 0
    while (c < count) {
      const user = await User.create({
        _id: c,
        name: userNames.shuffle()
      })
      console.log('Created user ', user.name);
      c++
    }
    console.log('All users created');
  }

  const createArtists = async (Artist, artistNames, count) => {
    console.log('Creating Artists');
    var c = 0
    while (c < count) {
      const artist = await Artist.create({
        _id: c,
        fullName: artistNames.shuffle()
      })
      console.log('Created artist ', artist.fullName);
      c++
    }
    console.log('All artists created');
  }


  try {
    await createBands(Band, bandNames, 5)
    await createArtists(Artist, artistNames, 5)
    await createUsers(User, userNames, 5)
    console.log('Seeding complete');
  } catch (err) {
    if (err.code === 11000) {
      return console.log('Seed already done');
    }
    return console.log(err);
  }


}
