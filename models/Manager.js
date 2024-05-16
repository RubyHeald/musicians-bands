const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Manager = sequelize.define('Manager', {
    name: {
      type: DataTypes.STRING
    },
    salary: {
      type: DataTypes.NUMBER
    },
    email: {
      type: DataTypes.STRING
    },
    dateHired:{
      type: DataTypes.DATE
    }
  });
  

module.exports = {
    Manager
};