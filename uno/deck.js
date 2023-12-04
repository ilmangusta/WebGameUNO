//const prompt = require("prompt-sync")();
export class Deck {
  //class definition for our deck game including total of 108 cards, 25 for each color and 8 special cards.
  cards = [];
  constructor() {
    this.cards = [
      [0, "RED", "cardsimages/0r.png"],
      [1, "RED", "cardsimages/1r.png"],
      [2, "RED", "cardsimages/2r.png"],
      [3, "RED", "cardsimages/3r.png"],
      [4, "RED", "cardsimages/4r.png"],
      [5, "RED", "cardsimages/5r.png"],
      [6, "RED", "cardsimages/6r.png"],
      [7, "RED", "cardsimages/7r.png"],
      [8, "RED", "cardsimages/8r.png"],
      [9, "RED", "cardsimages/9r.png"],
      ["STOP", "RED", "cardsimages/stopr.png"],
      ["STOP", "RED", "cardsimages/stopr.png"],
      ["SWITCH", "RED", "cardsimages/reverser.png"],
      ["SWITCH", "RED", "cardsimages/reverser.png"],
      ["+2CARDS", "RED", "cardsimages/+2r.png"],
      ["+2CARDS", "RED", "cardsimages/+2r.png"],
      [0, "YELLOW", "cardsimages/0y.png"],
      [1, "YELLOW", "cardsimages/1y.png"],
      [2, "YELLOW", "cardsimages/2y.png"],
      [3, "YELLOW", "cardsimages/3y.png"],
      [4, "YELLOW", "cardsimages/4y.png"],
      [5, "YELLOW", "cardsimages/5y.png"],
      [6, "YELLOW", "cardsimages/6y.png"],
      [7, "YELLOW", "cardsimages/7y.png"],
      [8, "YELLOW", "cardsimages/8y.png"],
      [9, "YELLOW", "cardsimages/9y.png"],
      ["STOP", "YELLOW", "cardsimages/stopy.png"],
      ["STOP", "YELLOW", "cardsimages/stopy.png"],
      ["SWITCH", "YELLOW", "cardsimages/reversey.png"],
      ["SWITCH", "YELLOW", "cardsimages/reversey.png"],
      ["+2CARDS", "YELLOW", "cardsimages/+2y.png"],
      ["+2CARDS", "YELLOW", "cardsimages/+2y.png"],
      [0, "GREEN", "cardsimages/0g.png"],
      [1, "GREEN", "cardsimages/1g.png"],
      [2, "GREEN", "cardsimages/2g.png"],
      [3, "GREEN", "cardsimages/3g.png"],
      [4, "GREEN", "cardsimages/4g.png"],
      [5, "GREEN", "cardsimages/5g.png"],
      [6, "GREEN", "cardsimages/6g.png"],
      [7, "GREEN", "cardsimages/7g.png"],
      [8, "GREEN", "cardsimages/8g.png"],
      [9, "GREEN", "cardsimages/9g.png"],
      ["STOP", "GREEN", "cardsimages/stopg.png"],
      ["STOP", "GREEN", "cardsimages/stopg.png"],
      ["SWITCH", "GREEN", "cardsimages/reverseg.png"],
      ["SWITCH", "GREEN", "cardsimages/reverseg.png"],
      ["+2CARDS", "GREEN", "cardsimages/+2g.png"],
      ["+2CARDS", "GREEN", "cardsimages/+2g.png"],
      [0, "BLUE", "cardsimages/0b.png"],
      [1, "BLUE", "cardsimages/1b.png"],
      [2, "BLUE", "cardsimages/2b.png"],
      [3, "BLUE", "cardsimages/3b.png"],
      [4, "BLUE", "cardsimages/4b.png"],
      [5, "BLUE", "cardsimages/5b.png"],
      [6, "BLUE", "cardsimages/6b.png"],
      [7, "BLUE", "cardsimages/7b.png"],
      [8, "BLUE", "cardsimages/8b.png"],
      [9, "BLUE", "cardsimages/9b.png"],
      ["STOP", "BLUE", "cardsimages/stopb.png"],
      ["STOP", "BLUE", "cardsimages/stopb.png"],
      ["SWITCH", "BLUE", "cardsimages/reverseb.png"],
      ["SWITCH", "BLUE", "cardsimages/reverseb.png"],
      ["+2CARDS", "BLUE", "cardsimages/+2b.png"],
      ["+2CARDS", "BLUE", "cardsimages/+2b.png"],
      ["CHANGE", "SPECIAL", "cardsimages/change.png"],
      ["CHANGE", "SPECIAL", "cardsimages/change.png"],
      ["CHANGE", "SPECIAL", "cardsimages/change.png"],
      ["CHANGE", "SPECIAL", "cardsimages/change.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/+4.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/+4.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/+4.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/+4.png"],
    ];
  }
  randomize() {
    //method to shuffle the deck at the start of game.
    this.cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return;
  }
}
