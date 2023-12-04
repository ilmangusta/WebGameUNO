export class cpu {
  //class definition for all cpu actions.
  constructor() {
    this.hand = [];
  }

  draw(n, deck) {
    //draw new card;
    for (var i = 0; i < n; i++) {
      this.hand.push(deck.shift());
    }
  }

  newHand(deck) {
    //new hand
    this.draw(7, deck);
  }

  randomColor() {
    //function to help to random color for cpu when using +4 or CHANGE color card
    var number = Math.floor(Math.random() * 4);
    if (number == 0) {
      return "RED";
    }
    if (number == 1) {
      return "BLUE";
    }
    if (number == 2) {
      return "GREEN";
    }
    if (number == 3) {
      return "YELLOW";
    }
  }

  move(p, f, deck) {
    var card;
    for (var i = 0; i < this.hand.length; i++) {
      if (this.hand[i][0] == "+4CARDS") {
        p.draw(4, deck);
        console.log("Enemy used " + this.hand[i]);
        console.log("You draw 4 cards and enemy choose the color!");
        f.color = randomColor();
        f.number = -1;
        console.log("Enemy choose " + f.color);
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
      if (this.hand[i][0] == "CHANGE") {
        console.log("Enemy used " + this.hand[i]);
        console.log("Enemey choose the color!");
        f.color = randomColor();
        f.number = -1;
        console.log("Enemy choose " + f.color);
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
      if (
        this.hand[i][0] == "+2CARDS" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        p.draw(2, deck);
        console.log("Enemy used " + this.hand[i]);
        console.log("You draw 2 cards!");
        f.color = this.hand[i][1];
        f.number = this.hand[i][0];
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
      if (
        this.hand[i][0] == "STOP" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        console.log("Enemy used " + this.hand[i]);
        console.log("You skip one turn!");
        f.number = this.hand[i][0];
        f.color = this.hand[i][1];
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "STOP";
      }
      if (
        this.hand[i][0] == "SWITCH" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        console.log("Enemy used " + this.hand[i]);
        console.log("The enemy changed the spin! You skip one turn!");
        f.color = this.hand[i][1];
        f.number = this.hand[i][0];
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "STOP";
      }
      if (this.hand[i][0] == f.number || this.hand[i][1] == f.color) {
        f.number = this.hand[i][0];
        f.color = this.hand[i][1];
        console.log("Enemy used " + this.hand[i]);
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
    }

    this.draw(1, deck);
    console.log(
      "The enemy draw one card and have " +
        this.hand.length +
        " cards! Your turn!"
    );
    return "GO";
  }

  UpdateField(card, f) {
    const cardContainer = document.querySelector(".ultima-carta");
    cardContainer.innerHTML = "";
    const image = document.createElement("img");
    image.src = card[2];
    cardContainer.prepend(image);
    f.card = card;
  }

  discard(deck, i) {
    if (this.hand.length == 1) {
      if (
        this.hand[0][1] == "SPECIAL" ||
        this.hand[0][0] == "+2CARDS" ||
        this.hand[0][0] == "SWITCH" ||
        this.hand[0][0] == "STOP"
      ) {
        this.hand = [];
        this.draw(1, deck);
        console.log(
          "You can not finish the game with Not number card!! Draw new card!"
        );
        console.log("Enemy yells `UNO`");
        return;
      }
    }
    this.hand.splice(i, 1);
    //console.log("Enemy hand: ");
    console.log("The enemy still has " + this.hand.length + " cards!");
    if (this.hand.length == 1) {
      console.log("THE ENEMY HAS ONE CARD LEFT!!");
    }
    return;
  }
}
