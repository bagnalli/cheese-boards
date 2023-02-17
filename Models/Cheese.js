const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Cheese = sequelize.define("Cheese", {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = { Cheese };
