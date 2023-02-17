const { Association } = require("sequelize");
const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./Models/index.js");

// MODEL Tests
// describe("Use, Board and Cheese Model tests", () => {
//   beforeAll(async () => {
//     await sequelize.sync({ force: true });
//   });
//   // USER TEST
//   test("User Tests", async () => {
//     const user1 = await User.create({
//       name: "Steven",
//       email: "steven@email.com",
//     });
//     expect(user1.name).toBe("Steven");
//     expect(user1.email).toBe("steven@email.com");
//   });
//   // BOARD TEST
//   test("Board Tests", async () => {
//     const board1 = await Board.create({
//       type: "yellow cheese",
//       description: "contains dairy",
//       rating: 5,
//     });
//     expect(board1.type).toBe("yellow cheese");
//     expect(board1.description).toBe("contains dairy");
//     expect(board1.rating).toBe(5);
//   });
//   // CHEESE TEST
//   test("Cheese Tests", async () => {
//     const cheese1 = await Cheese.create({
//       title: "pigeon cheese",
//       description: "Liverpool delicacy",
//     });
//     expect(cheese1.title).toBe("pigeon cheese");
//     expect(cheese1.description).toBe("Liverpool delicacy");
//   });
// });

// ASSOCIATION TESTS
describe("Association Tests", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
  // USER to BOARD Assoc Test
  test("User can have many Boards", async () => {
    // CREATE TEST SUBJECT
    const user2 = await User.create({
      name: "Bob",
      email: "Bob@email.com",
    });
    const board2 = await Board.create({
      type: "french",
      description: "from france",
      rating: 4,
    });
    const board3 = await Board.create({
      type: "english",
      description: "from england",
      rating: 5,
    });
    // CREATE ASSOCIATION
    await user2.addBoard(board2);
    await user2.addBoard(board3);
    // TEST ASSOCIATION
    const user2boards = await user2.getBoards();
    expect(user2boards.length).toBe(2);
    expect(user2boards[0] instanceof Board).toBeTruthy;
    expect(user2boards[0].type).toBe("french");
  });

  // CheeseBoard Test

  test("CheeseBoard many-many", async () => {
    await sequelize.sync({ force: true });

    // CREATE TEST SUBJECT
    const lancCheese = await Cheese.create({
      title: "Lancashire",
      description: "Finest",
    });
    const yorkCheese = await Cheese.create({
      title: "Yorkshire",
      description: "Rubbish",
    });
    const rosesBoard = await Board.create({
      type: "County Cheese",
      description: "BOTR",
      rating: 4,
    });
    const boardOfTheRoses = await Board.create({
      type: "Cheese County",
      description: "Red > White",
      rating: 5,
    });
    // Create Association
    await boardOfTheRoses.addCheese([lancCheese, yorkCheese]);
    // TEST 1
    const fullBoardOfTheRoses = await boardOfTheRoses.getCheeses();
    expect(fullBoardOfTheRoses.length).toBe(2);
    // TEST 2
    await rosesBoard.addCheese(lancCheese);
    const rosesLancCheese = await lancCheese.getBoards();
    expect(rosesLancCheese.length).toBe(2);
    const rosesYorkCheese = await yorkCheese.getBoards();
    expect(rosesYorkCheese.length).toBe(1);
  });
});
