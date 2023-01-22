const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const MovieHasDirector = sequelize.define(
  'movie_has_director',
  {
    movie_has_director_id: {
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

module.exports = MovieHasDirector;
