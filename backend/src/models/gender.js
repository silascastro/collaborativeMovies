const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Gender = sequelize.define(
  'gender',
  {
    gender_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    gender: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Gender;
