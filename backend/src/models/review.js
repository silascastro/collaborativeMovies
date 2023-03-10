const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Review = sequelize.define(
  'review',
  {
    review_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    review_note: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    review_comentary: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    review_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Review;
