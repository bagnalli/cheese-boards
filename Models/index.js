const { User } = require("./User");
const { Board } = require("./Board");
const { Cheese } = require("./Cheese");

// User can have multiple Boards
User.hasMany(Board);
Board.belongsTo(User);

// Board Cheese Many Many
Board.belongsToMany(Cheese, { through: "CheeseBoard" });
Cheese.belongsToMany(Board, { through: "CheeseBoard" });

module.exports = { User, Board, Cheese };
