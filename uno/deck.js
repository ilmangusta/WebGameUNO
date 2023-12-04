//const prompt = require("prompt-sync")();
export class Deck {
  //class definition for our deck game including total of 108 cards, 25 for each color and 8 special cards.
  cards = [];
  constructor() {
    this.cards = [
      [0, "R", "cardsimages/0r.png"],
      [1, "R", "cardsimages/1r.png"],
      [2, "R", "cardsimages/2r.png"],
      [3, "R", "cardsimages/3r.png"],
      [4, "R", "cardsimages/1r.png"],
      [5, "R", "cardsimages/1r.png"],
      [6, "R", "cardsimages/1r.png"],
      [7, "R", "cardsimages/1r.png"],
      [8, "R", "cardsimages/1r.png"],
      [9, "R", "cardsimages/1r.png"],
      ["STOP", "R", "cardsimages/1r.png"],
      ["STOP", "R", "cardsimages/1r.png"],
      ["SWITCH", "R", "cardsimages/1r.png"],
      ["SWITCH", "R", "cardsimages/1r.png"],
      ["+2CARDS", "R", "cardsimages/1r.png"],
      ["+2CARDS", "R", "cardsimages/1r.png"],
      [0, "Y", "cardsimages/1r.png"],
      [1, "Y", "cardsimages/1r.png"],
      [2, "Y", "cardsimages/1r.png"],
      [3, "Y", "cardsimages/1r.png"],
      [4, "Y", "cardsimages/1r.png"],
      [5, "Y", "cardsimages/1r.png"],
      [6, "Y", "cardsimages/1r.png"],
      [7, "Y", "cardsimages/1r.png"],
      [8, "Y", "cardsimages/1r.png"],
      [9, "Y", "cardsimages/1r.png"],
      ["STOP", "Y", "cardsimages/1r.png"],
      ["STOP", "Y", "cardsimages/1r.png"],
      ["SWITCH", "Y", "cardsimages/1r.png"],
      ["SWITCH", "Y", "cardsimages/1r.png"],
      ["+2CARDS", "Y", "cardsimages/1r.png"],
      ["+2CARDS", "Y", "cardsimages/1r.png"],
      [0, "G", "cardsimages/1r.png"],
      [1, "G", "cardsimages/1r.png"],
      [2, "G", "cardsimages/1r.png"],
      [3, "G", "cardsimages/1r.png"],
      [4, "G", "cardsimages/1r.png"],
      [5, "G", "cardsimages/1r.png"],
      [6, "G", "cardsimages/1r.png"],
      [7, "G", "cardsimages/1r.png"],
      [8, "G", "cardsimages/1r.png"],
      [9, "G", "cardsimages/1r.png"],
      ["STOP", "G", "cardsimages/1r.png"],
      ["STOP", "G", "cardsimages/1r.png"],
      ["SWITCH", "G", "cardsimages/1r.png"],
      ["SWITCH", "G", "cardsimages/1r.png"],
      ["+2CARDS", "G", "cardsimages/1r.png"],
      ["+2CARDS", "G", "cardsimages/1r.png"],
      [0, "B", "cardsimages/1r.png"],
      [1, "B", "cardsimages/1r.png"],
      [2, "B", "cardsimages/1r.png"],
      [3, "B", "cardsimages/1r.png"],
      [4, "B", "cardsimages/1r.png"],
      [5, "B", "cardsimages/1r.png"],
      [6, "B", "cardsimages/1r.png"],
      [7, "B", "cardsimages/1r.png"],
      [8, "B", "cardsimages/1r.png"],
      [9, "B", "cardsimages/1r.png"],
      ["STOP", "B", "cardsimages/1r.png"],
      ["STOP", "B", "cardsimages/1r.png"],
      ["SWITCH", "B", "cardsimages/1r.png"],
      ["SWITCH", "B", "cardsimages/1r.png"],
      ["+2CARDS", "B", "cardsimages/1r.png"],
      ["+2CARDS", "B", "cardsimages/1r.png"],
      ["CHANGE", "SPECIAL", "cardsimages/1r.png"],
      ["CHANGE", "SPECIAL", "cardsimages/1r.png"],
      ["CHANGE", "SPECIAL", "cardsimages/1r.png"],
      ["CHANGE", "SPECIAL", "cardsimages/1r.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/1r.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/1r.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/1r.png"],
      ["+4CARDS", "SPECIAL", "cardsimages/1r.png"],
    ];
  }
  randomize() {
    //method to shuffle the deck at the start of game.
    this.cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
    /*this.cards.sort(function (a, b) {
      if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
      if (a[1] !== b[1]) return a[1] < b[1] ? -1 : 1;
      return a[2] < b[2] ? -1 : 1;
    });
    */
    return;
  }
}
