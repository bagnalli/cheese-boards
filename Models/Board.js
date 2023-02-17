const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Board = sequelize.define("Board", {
  type: DataTypes.STRING,
  description: DataTypes.STRING,
  rating: DataTypes.NUMBER,
});

module.exports = { Board };
