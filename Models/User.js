const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = { User };
