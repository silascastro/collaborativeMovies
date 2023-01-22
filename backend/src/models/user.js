const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define(
  'user',
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_nickname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    user_photo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
