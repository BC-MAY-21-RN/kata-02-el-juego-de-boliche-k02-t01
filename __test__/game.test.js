const { Game } = require("../src/models/Game");

describe("Game test", () => {
  test("should initialize game object", () => {
    const game = new Game();
    expect(game).not.toBe("undefined");
  });

  test("Should generate values for the rounds", () => {
    const game = new Game();
    expect(game.generateRoundValue()).toBeCloseTo(número, númeroDigitos?)
  });
  
  test("Should print the results of the rounds", () => {
    const game = new Game();
    expect(game.game.length).toBe(2);
  });
});
