const {db, DataTypes} = require("../db.js");

const Band = db.define("band",{
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    },

    {sequelize: db,
    modelName: 'Band',
    });

module.exports = Band;
