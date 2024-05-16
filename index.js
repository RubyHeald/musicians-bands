const { Band } = require('./models/Band')
const { Manager } = require('./models/Manager')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")

Band.hasMany(Musician)
Musician.belongsTo(Band)

Song.belongsToMany(Band, { through: 'BandSongs'})
Band.belongsToMany(Song, { through: 'BandSongs'})

Manager.hasMany(Band)
Band.belongsTo(Manager)

module.exports = {
    Band,
    Musician,
    Song,
    Manager,
};