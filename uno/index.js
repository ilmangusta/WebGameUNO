import { field } from "./field.js";
import { cpu } from "./cpu.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

var myHand = [];

let deck = new Deck();
deck.randomize();
deck = deck.cards;
console.log(deck);

const enemy = new cpu();
enemy.newHand(deck); //Avversario ha le carte

const f = new field();
f.newField(deck);

const p = new Player();
p.newHand(deck);
//deck.randomize();
//player = new player();

function createField() {
  const cardContainer = document.querySelector(".ultima-carta");
  const image = document.createElement("img");
  image.src = f.card[2];
  cardContainer.prepend(image);
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
      PescaLeCarte(8, deck);
      modale.remove();
      overlay.remove();
    },
    true
  );
  modale.append(btn);
  body.prepend(modale);

  const deckcontainer = document.querySelector(".deck");
  deckcontainer.addEventListener(
    "click",
    () => {
      PescaLeCarte(1, deck);
    },
    true
  );
}

createField(deck);
StartNewGame(deck);

function PescaLeCarte(n, deck) {
  var card;
  for (var i = 0; i < n; i++) {
    card = deck.shift();
    myHand.push(card);
  }
  viewMano();
}

function usaCarta(e) {
  const index = e.target.closest("div").getAttribute("data-number");
  console.log(index, myHand[index]);
  //myhand[idx] carta da usare
  if (checkMove(myHand[index])) {
    p.move(myHand[index], f, deck, enemy);
  } else {
    //azione non consentita
    //non rimuovere carta
    return;
  }

  const cardContainer = document.querySelector(".ultima-carta");
  cardContainer.innerHTML = "";

  const image = document.createElement("img");
  image.src = myHand[index][2];
  cardContainer.prepend(image);
  f.card = myHand[index];
  myHand.splice(index, 1);
}

function checkMove(card) {
  if (
    card[0] == field[0] ||
    card[1] == field[1] ||
    card[0] == "+4CARDS" ||
    card[0] == "CHANGE"
  ) {
    return true;
  } else {
    console.log("carta non giusta: " + f.card);
    return false;
  }
}

function viewMano() {
  const myCardContainer = document.querySelector(".my-cards-container");
  myCardContainer.innerHTML = "";
  for (var i = 0; i < myHand.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("my-card-element");
    cardContainer.setAttribute("data-number", i);
    const image = document.createElement("img");
    image.src = myHand[i][2];
    cardContainer.prepend(image);

    myCardContainer.prepend(cardContainer);
    cardContainer.addEventListener(
      "click",
      (e) => {
        usaCarta(e);
        viewMano();
      },
      true
    );
  }
}
