const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./Models/index.js");

describe("Use, Board and Cheese Model tests", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
  test("can create User", async () => {
    const user1 = await User.create({
      name: "Steven",
      email: "steven@email.com",
    });
    expect(user1.name).toBe("Steven");
  });
});
