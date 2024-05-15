const {Sequelize, sequelize} = require('../db');

const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    length: {
      type: DataTypes.INTEGER
    }
  });

module.exports = {
    Song
};