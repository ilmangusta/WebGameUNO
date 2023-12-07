export class cpu {
  //class definition for all cpu actions.
  hand = [];
  cpu() {
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
    var card, res;
    for (var i = 0; i < this.hand.length; i++) {
      if (this.hand[i][0] == "+4CARDS") {
        p.draw(4, deck);
        this.UpdateField(this.hand[i], f);
        this.sleep(300).then(() =>
          alert("Enemy used Change Color. Enemy choose: " + f.color)
        );
        res = this.discard(deck, i);
        if (res == "WINCPU") return "WINCPU";
        else return "GO";
      }
      if (this.hand[i][0] == "CHANGE") {
        this.UpdateField(this.hand[i], f);
        this.sleep(300).then(() =>
          alert("Enemy used Change Color. Enemy choose: " + f.color)
        );
        res = this.discard(deck, i);
        if (res == "WINCPU") return "WINCPU";
        else return "GO";
      }
      if (
        this.hand[i][0] == "+2CARDS" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        p.draw(2, deck);
        this.UpdateField(this.hand[i], f);
        //alert("Enemy used +2 Card " + this.hand[i][1] + ". You draw 2 cards!");
        res = this.discard(deck, i);
        if (res == "WINCPU") return "WINCPU";
        else return "GO";
      }
      if (
        this.hand[i][0] == "STOP" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        this.UpdateField(this.hand[i], f);
        alert("Enemy used STOP " + this.hand[i][1] + "!");
        res = this.discard(deck, i);
        if (res == "WINCPU") return "WINCPU";
        else return "SKIP";
      }
      if (
        this.hand[i][0] == "SWITCH" &&
        (this.hand[i][1] == f.color || this.hand[i][0] == f.number)
      ) {
        this.UpdateField(this.hand[i], f);
        alert("Enemy used SWITCH " + this.hand[i][1] + "!");
        res = this.discard(deck, i);
        if (res == "WINCPU") return "WINCPU";
        else return "SKIP";
      }
      if (this.hand[i][0] == f.number || this.hand[i][1] == f.color) {
        this.UpdateField(this.hand[i], f);
        //alert("Enemy used " + this.hand[i][0] + " " + this.hand[i][1] + "!");
        res = this.discard(deck, i);
        if (res == "WINCPU") return "WINCPU";
        else return "GO";
      }
    }
    this.draw(1, deck);
    //alert("The enemy draw one card and have " +this.hand.length +" cards! Your turn!");
    return "GO";
  }

  UpdateField(card, f) {
    const cardContainer = document.querySelector(".ultima-carta");
    cardContainer.innerHTML = "";
    const image = document.createElement("img");
    f.card = card;
    f.number = card[0];
    if (card[0] == "+4CARDS" || card[0] == "CHANGE") {
      f.color = this.randomColor();
    } else f.color = card[1];
    image.src = card[2];
    cardContainer.prepend(image);
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
          "cpu can not finish the game with not number card!! Cpu draw new card! Enemy yells `UNO`"
        );
        return "GO";
      } else {
        this.hand = [];
        //victory of cpu 0 cards left
        alert("THE ENEMY WIN, YOU LOSE. SCEMO TRY AGAIN");
        return "WINCPU";
      }
    }
    this.hand.splice(i, 1);
    if (this.hand.length == 1) {
      alert("THE ENEMY HAS ONE CARD LEFT!! DIAMO EEEHHHHH");
    } else {
      console.log("The enemy still has " + this.hand.length + " cards!");
    }
    return "GO";
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
