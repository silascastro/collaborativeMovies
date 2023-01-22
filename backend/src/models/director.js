const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Director = sequelize.define(
  'director',
  {
    director_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    director_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Director;
