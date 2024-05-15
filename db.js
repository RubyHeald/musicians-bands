const { Sequelize, Model, DataTypes } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname, "db.sqlite"),
});
// TODO - create the new sequelize connection


module.exports = {
    sequelize,
    Sequelize
};
