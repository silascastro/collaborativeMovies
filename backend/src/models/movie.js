const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Review = require('./review');

const Movie = sequelize.define(
  'movie',
  {
    movie_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    movie_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    movie_description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    movie_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    movie_director: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    movie_image: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    movie_gender: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    movie_link: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Movie.hasMany(Review, {
  foreignKey: 'fk_movie_id',
  constraint: true,
});

module.exports = Movie;
