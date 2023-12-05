export class Player {
  //class definition for all player actions.
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

  move(card, f, deck, cpu) {
    const cardContainer = document.querySelector(".ultima-carta");
    cardContainer.innerHTML = "";
    console.log("carta: " + card);
    f.card = card;
    f.number = card[0];
    f.color = card[1];
    const image = document.createElement("img");
    image.src = card[2];
    cardContainer.prepend(image);

    if (card[0] == "SKIP") {
      this.draw(1, deck);
      console.log("You drew one card and skipped the turn!");
      return "GO";
    } else if (card[0] == "+4CARDS") {
      var color = prompt(
        "Enemy draw 4 cards and you choose the color!\nBLUE - GREEN - RED - YELLOW"
      );
      f.color = color.toUpperCase();
      f.number = -1;
      cpu.draw(4, deck);
      return "GO";
    } else if (card[0] == "CHANGE") {
      var color = prompt("Choose the color!\nBLUE - GREEN - RED - YELLOW");
      f.color = color.toUpperCase();
      f.number = -1;
      return "GO";
    } else if (card[0] == "+2CARDS") {
      console.log("Enemy draw 2 cards!");
      f.number = card[0];
      f.color = card[1];
      cpu.draw(2, deck);
      return "GO";
    } else if (card[0] == "STOP") {
      console.log("Enemy skip one turn!");
      f.color = card[1];
      f.number = card[0];
      return "SKIP";
    } else if (card[0] == "SWITCH") {
      console.log("Change Spin! Enemy skip one turn!");
      f.color = card[1];
      f.number = card[0];
      return "SKIP";
    }
    return "GO";
  }

  discard(card, i, deck) {
    if (this.hand.length == 1) {
      if (
        this.hand[0][1] == "SPECIAL" ||
        this.hand[0][0] == "+2CARDS" ||
        this.hand[0][0] == "SWITCH" ||
        this.hand[0][0] == "STOP"
      ) {
        this.hand = [];
        this.draw(1, deck);
        alert(
          "You can not finish the game with Not number card!! Draw new card!"
        );
        alert("You yell `UNO`");
        return "GO";
      } else {
        this.hand = [];
        return "PLAYERWIN;";
      }
    } else {
      this.hand.splice(i, 1);
      if (this.hand.length == 1) {
        alert("YOU YELL `UNO`!!");
      }
    }
    return "GO";
  }
}
