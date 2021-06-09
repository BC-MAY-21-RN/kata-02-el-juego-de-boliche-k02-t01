class Round {
  constructor(firstTrie = -1, secondTrie = -1) {
    this.firstTrie = firstTrie;
    this.secondTrie = secondTrie;
    this.roundValue = 0;
  }

  getRoundValue() {
    return this.firstTrie + this.secondTrie;
  }

  setTrieValue(value) {
    if (this.firstTrie === -1) {
      this.firstTrie = value;
    } else {
      if (this.firstTrie === 10) {
        this.secondTrie = 0;
      } else {
        this.secondTrie = value;
      }
    }
  }

  isStrike(bonus) {
    this.roundValue = bonus + 10;
  }

  getRound() {
    return {
      firstTrie: this.firstTrie,
      secondTrie: this.secondTrie,
    };
  }

  getFullRound() {
    return {
      firstTrie: this.firstTrie,
      secondTrie: this.secondTrie,
      roundValue: this.getRoundValue(),
    };
  }
}

module.exports = {
  Round,
};
