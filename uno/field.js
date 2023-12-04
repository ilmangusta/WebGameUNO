export class field {
  //class definition to simplify the method how we view the actual fieland create new field at start of game.
  number = null;
  color = null;
  card = null;

  view() {
    console.log("The actual field is:\n" + this.number + "  " + this.color);
  }

  newField(deck) {
    //search for 1st valid card of the game
    for (var i = 0; i < deck.length; i++) {
      if (
        deck[i][0] == "+2CARDS" ||
        deck[i][0] == "+4CARDS" ||
        deck[i][0] == "STOP" ||
        deck[i][0] == "SWITCH" ||
        deck[i][0] == "CHANGE"
      ) {
        continue;
      }
      this.card = deck[i];
      this.number = deck[i][0];
      this.color = deck[i][1];
      deck.splice(i, 1);
    }
  }
}
