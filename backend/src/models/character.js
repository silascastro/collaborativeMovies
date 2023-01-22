const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Character = sequelize.define(
  'character',
  {
    character_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Character;
