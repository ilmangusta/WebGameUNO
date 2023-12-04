export class cpu {
  //class definition for all cpu actions.
  hand = [];
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
        f.color = this.randomColor();
        f.number = -1;
        alert(
          "Enemy used +4 Card. You draw 4 cards and enemy choose: " + f.color
        );
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
      if (this.hand[i][0] == "CHANGE") {
        f.color = this.randomColor();
        f.number = -1;
        alert("Enemy used Change Color. Enemy choose: " + f.color);
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
      if (
        this.hand[i][0] == "+2CARDS" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        p.draw(2, deck);
        alert("Enemy used +2 Card. You draw 2 cards!");
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
        f.color = this.hand[i][1];
        f.number = this.hand[i][0];
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "STOP";
      }
      if (this.hand[i][0] == f.number || this.hand[i][1] == f.color) {
        f.number = this.hand[i][0];
        f.color = this.hand[i][1];
        this.UpdateField(this.hand[i], f);
        this.discard(deck, i);
        return "GO";
      }
    }
    this.draw(1, deck);
    alert(
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
      this.hand = [];
      if (
        this.hand[0][1] == "SPECIAL" ||
        this.hand[0][0] == "+2CARDS" ||
        this.hand[0][0] == "SWITCH" ||
        this.hand[0][0] == "STOP"
      ) {
        this.draw(1, deck);
        console.log(
          "You can not finish the game with Not number card!! Draw new card!"
        );
        console.log("Enemy yells `UNO`");
        return;
      } else {
        //victory of cpu 0 cards left
        alert("THE ENEMY WIN, YOU LOSE. SCEMO TRY AGAIN");
      }
    }
    this.hand.splice(i, 1);
    if (this.hand.length == 1) {
      alert("THE ENEMY HAS ONE CARD LEFT!! DIAMO EEEHHHHH");
    } else console.log("The enemy still has " + this.hand.length + " cards!");
  }
}
