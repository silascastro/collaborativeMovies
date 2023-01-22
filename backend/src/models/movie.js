const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Gender = require('./gender');
const User = require('./user');
const Actor = require('./actor');
const Review = require('./review');
const FavoriteMovie = require('./favorite-movie');
const Character = require('./character');

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
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    movie_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    movie_director: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    movie_image: {
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

//gender

Movie.belongsTo(Gender, {
  constraint: true,
  foreignKey: 'gender_id',
});

//review

Movie.belongsToMany(User, {
  through: {
    model: Review,
  },
  foreignKey: 'review_movie_id',
  constraint: true,
});

User.belongsToMany(Movie, {
  through: {
    model: Review,
  },
  foreignKey: 'review_user_id',
  constraint: true,
});

//fav movies

Movie.belongsToMany(User, {
  through: {
    model: FavoriteMovie,
  },
  foreignKey: 'favorite_movie_id',
  constraint: true,
});

User.belongsToMany(Movie, {
  through: {
    model: FavoriteMovie,
  },
  foreignKey: 'favorite_user_id',
  constraint: true,
});

//character

Movie.belongsToMany(Actor, {
  through: {
    model: Character,
  },
  foreignKey: 'character_movie_id',
  constraint: true,
});

Actor.belongsToMany(Movie, {
  through: {
    model: Character,
  },
  foreignKey: 'character_actor_id',
  constraint: true,
});

module.exports = Movie;
