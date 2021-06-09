const { Round } = require("../src/models/Round");

describe("Round test", () => {
  test("should initialize round object", () => {
    const round = new Round();
    expect(round).not.toBe("undefined");
  });
  test("should change first trie value", () => {
    const round = new Round(1);
    expect(round.firstTrie).toBe(1);
  });
  test("should change second trie value", () => {
    const round = new Round(1, 2);
    expect(round.secondTrie).toBe(2);
  });
  test("should return round total value", () => {
    const round = new Round(3, 4);
    expect(round.getRoundValue()).toBe(7);
  });
  test("should set firts trie value", () => {
    const round = new Round();
    round.setTrieValue(3);
    expect(round.firstTrie).toBe(3);
  });
  test("should set second trie value", () => {
    const round = new Round();
    round.setTrieValue(3);
    round.setTrieValue(5);
    expect(round.secondTrie).toBe(5);
  });
  test("should validate is a strike", () => {
    const round = new Round();
    round.setTrieValue(10);
    round.setTrieValue(5);
    expect(round.secondTrie).toBe(0);
  });
});
