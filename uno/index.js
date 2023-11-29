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
//deck.randomize();
console.log(deck[1]);

function createField(deck) {
  const cardContainer = document.querySelector(".ultima-carta");

  //carta=estraiCarta();
  carta = deck.shift();

  cardContainer.classList.add("my-card-element");
  var link = "url('" + carta[2] + "')";
  cardContainer.style.backgroundImage = link;
  cardContainer.style.backgroundSize = "cover";
}

function StartNewGame(deck) {
  const body = document.querySelector("body");

  const overlay = document.createElement("div");
  overlay.classList.add("black-overlay");
  body.prepend(overlay);

  const modale = document.createElement("div");
  modale.classList.add("prompt-nome");

  modale.prepend(document.createElement("input"));
  const btn = document.createElement("button");
  btn.textContent = "Inizia";
  btn.addEventListener(
    "click",
    () => {
      PescaLeCarte(deck);
      modale.remove();
      overlay.remove();
    },
    true
  );
  modale.append(btn);
  body.prepend(modale);
}

createField(deck);
StartNewGame(deck);

function PescaLeCarte(deck) {
  console.log("pippo");

  const arrayCarte = deck;

  const myCardContainer = document.querySelector(".my-cards-container");
  for (var i = 0; i < 8; i++) {
    console.log(arrayCarte[i]);
    card = arrayCarte.shift();
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("my-card-element");
    var link = "url('" + card[2] + "')";
    cardContainer.style.backgroundImage = link;
    cardContainer.style.backgroundSize = "cover";

    myCardContainer.prepend(cardContainer);
    cardContainer.addEventListener(
      "click",
      () => {
        usaCarta(card);
        cardContainer.remove();
      },
      true
    );
  }
}

function usaCarta(carta) {
  const cardContainer = document.querySelector(".ultima-carta");
  cardContainer.innerHTML = "";
  cardContainer.classList.add("my-card-element");
  var link = "url('" + carta[2] + "')";
  cardContainer.style.backgroundImage = link;
}
