//const prompt = require("prompt-sync")();

class Deck {
  //class definition for our deck game including total of 108 cards, 25 for each color and 8 special cards.
  deck = [];
  deck2 = [];
  constructor() {
    this.deck = [
      [0, "R", "cardsimages/1r.png"],
      [1, "R", "cardsimages/1r.png"],
      [2, "R", "cardsimages/1r.png"],
      [3, "R", "cardsimages/1r.png"],
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
    this.deck2 = [
      [0, "R"],
      [1, "R"],
      [2, "R"],
      [3, "R"],
      [4, "R"],
      [5, "R"],
      [6, "R"],
      [7, "R"],
      [8, "R"],
      [9, "R"],
      ["STOP", "R"],
      ["STOP", "R"],
      ["SWITCH", "R"],
      ["SWITCH", "R"],
      ["+2CARDS", "R"],
      ["+2CARDS", "R"],
      [0, "Y"],
      [1, "Y"],
      [2, "Y"],
      ["STOP", "Y"],
      ["STOP", "Y"],
      ["SWITCH", "Y"],
      ["SWITCH", "Y"],
      ["+2CARDS", "Y"],
      ["+2CARDS", "Y"],
      [0, "G"],
      [1, "G"],
      [2, "G"],
      [3, "G"],
      [4, "G"],
      [5, "G"],
      [6, "G"],
      [7, "G"],
      [8, "G"],
      [9, "G"],
      ["STOP", "G"],
      ["STOP", "G"],
      ["SWITCH", "G"],
      ["SWITCH", "G"],
      ["+2CARDS", "G"],
      ["+2CARDS", "G"],
      [0, "B"],
      [1, "B"],
      [2, "B"],
      [3, "B"],
      [4, "B"],
      [5, "B"],
      [6, "B"],
      [7, "B"],
      [8, "B"],
      [9, "B"],
      ["STOP", "B"],
      ["STOP", "B"],
      ["SWITCH", "B"],
      ["SWITCH", "B"],
      ["+2CARDS", "B"],
      ["+2CARDS", "B"],
      ["CHANGE", "SPECIAL"],
      ["CHANGE", "SPECIAL"],
      ["CHANGE", "SPECIAL"],
      ["CHANGE", "SPECIAL"],
      ["+4CARDS", "SPECIAL"],
      ["+4CARDS", "SPECIAL"],
      ["+4CARDS", "SPECIAL"],
      ["+4CARDS", "SPECIAL"],
    ];
  }
  randomize() {
    //method to shuffle the deck at the start of game.
    this.deck.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return;
  }
}

d = new Deck();
deck = d.deck;
d.randomize();

//---------------------------------------------- element html

let startgamebtn = document.getElementById("btn-start");
startgamebtn.addEventListener("click", () => startgame());

let surrenderbtn, drawcardbtn;

let msg = document.getElementById("msg"); //messaggio di gioco
let gamearea = document.getElementById("game-area"); //per pulire le scritte
let fieldhtml = document.getElementById("field");
let hand = document.getElementById("hand");

let cards = document.getElementById("cards"); //per aggiungere carte
let started = false;

//---------------------------------------------- player

class Player {
  //class definition for all player actions.
  hand = [];
  constructor() {
    this.hand = [];
  }
  draw(n, deck) {
    //draw new card;
    for (var i = 0; i < n; i++) {
      var card = deck.shift();
      this.hand.push(card);
      var newcardbtn = document.createElement("button");
      newcardbtn.textContent = card;
      newcardbtn.addEventListener("click", () => playcard(card));
      cards.appendChild(newcardbtn);
    }
    console.log(this.hand);
  }
  newHand(deck) {
    //new hand
    this.draw(7, deck);
  }
  getHand() {
    return this.hand;
  }
}

//---------------------------------------------- game field

let field = {
  number: 0,
  color: null,
};

function newField(deck) {
  //search for 1st valid card of the game
  for (var i = 0; i < deck.length; i++) {
    if (deck[i][0] == "+2CARDS" || deck[i][0] == "+4CARDS") {
      continue;
    }
    if (deck[i][0] >= 0 || deck[i][0] <= 9) {
      field.number = deck[i][0];
      field.color = deck[i][1];
      d.deck.shift();
      return;
    }
  }
}

function cleanfield() {
  //gamearea.innerHTML="";
  fieldhtml.innerHTML = "";
  hand.innerHTML = "";
  cards.innerHTML = "";
  document.body.removeChild(surrenderbtn);
  document.body.removeChild(drawcardbtn);
}

//---------------------------------------------- startgame

function startgame() {
  if (started) {
    cleanfield();
  }
  started = true;
  newField(deck);
  console.log(field);
  msg.textContent = "Match begin. Play a card or draw one!";
  fieldhtml.textContent =
    "The actual field is:" + field.number + "  " + field.color;
  hand.textContent = "Your actual hand is:";

  surrenderbtn = document.createElement("button");
  surrenderbtn.textContent = "Surrender!";
  surrenderbtn.addEventListener("click", () => endgame());
  document.body.appendChild(surrenderbtn);

  drawcardbtn = document.createElement("button");
  drawcardbtn.textContent = "Draw card!";
  drawcardbtn.addEventListener("click", () => drawcard(player1));
  document.body.appendChild(drawcardbtn);

  let player1 = new Player();
  player1.newHand(deck);
}

function endgame() {
  started = false;
  cleanfield();
  msg.textContent = "Partita Conclusa, hai perso";
}

function drawcard(player) {
  player.draw(1, deck);
  alert("Hai pescato una carta");
}

function playcard(card) {
  console.log("prova carta: " + card);
}
