const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./Models/index.js");

describe("Use, Board and Cheese Model tests", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
  // USER TEST
  test("User Tests", async () => {
    const user1 = await User.create({
      name: "Steven",
      email: "steven@email.com",
    });
    expect(user1.name).toBe("Steven");
    expect(user1.email).toBe("steven@email.com");
  });
  // BOARD TEST
  test("Board Tests", async () => {
    const board1 = await Board.create({
      type: "yellow cheese",
      description: "contains dairy",
      rating: 5,
    });
    expect(board1.type).toBe("yellow cheese");
    expect(board1.description).toBe("contains dairy");
    expect(board1.rating).toBe(5);
  });
  // CHEESE TEST
  test("Cheese Tests", async () => {
    const cheese1 = await Cheese.create({
      title: "pigeon cheese",
      description: "Liverpool delicacy",
    });
    expect(cheese1.title).toBe("pigeon cheese");
    expect(cheese1.description).toBe("Liverpool delicacy");
  });
});
