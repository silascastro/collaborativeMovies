const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Actor = sequelize.define(
  'actor',
  {
    actor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    actor_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    actor_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Actor;
