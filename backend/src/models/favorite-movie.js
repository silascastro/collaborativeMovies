const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const FavoriteMovie = sequelize.define(
  'favorite_movie',
  {
    favorite_id: {
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

module.exports = FavoriteMovie;
