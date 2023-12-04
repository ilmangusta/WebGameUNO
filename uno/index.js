import { field } from "./field.js";
import { cpu } from "./cpu.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

function UNOgame() {
  var used_card; //card used by user
  var move_player; //action of the user card
  var move_cpu; //action of the cpu card
  //var name = prompt("Choose a name player:"); //new name for player
  //1. inizializzo le impostazioni basi del gioco
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
  var myHand = p.hand;
  //deck.randomize();
  //player = new player();

  //2. inizio la routine del gioco
  createField(f);
  StartNewGame(deck, myHand);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function createField(f) {
    const cardContainer = document.querySelector(".ultima-carta");
    const image = document.createElement("img");
    image.src = f.card[2];
    cardContainer.prepend(image);
  }

  function StartNewGame(deck, myHand) {
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
        DrawCards(8, deck, myHand);
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
        DrawCards(1, deck, myHand);
      },
      true
    );
  }

  function DrawCards(n, deck, myHand) {
    for (var i = 0; i < n; i++) {
      myHand.push(deck.shift());
    }
    ViewHand();
  }

  function finishGame() {
    return;
  }
  function UseCard(e) {
    const index = e.target.closest("div").getAttribute("data-number");
    var move_player;
    //myhand[idx] carta da usare
    if (checkMove(myHand[index])) {
      move_player = p.move(myHand[index], index, f, deck, enemy);
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
    //mossa giocatore
    sleep(1500);
    if (move_player != "SKIP") {
      console.log("Turno avversario");
      cpuTurn();
    } else {
      console.log("Avversario salta turno");
    }
    //player stop or switch cpu
  }

  function checkMove(card) {
    console.log(card, f);
    if (
      card[0] == f.number ||
      card[1] == f.color ||
      card[0] == "+4CARDS" ||
      card[0] == "CHANGE"
    ) {
      return true;
    } else {
      console.log("carta non giusta. Campo è:" + f.card);
      return false;
    }
  }

  function cpuTurn() {
    var move_cpu = enemy.move(p, f, deck); //cpu moving
    ViewHand();

    if (move_cpu == "STOP") {
      //cpu stop  or switch
      while (move_cpu != "GO") {
        move_cpu = enemy.move(p, f, deck); //cpu moving again cause used STOP or SWITCH card
        ViewHand();
      }
    }

    if (enemy.hand.length == 0) {
      //victory of cpu 0 cards left
      console.log("THE ENEMY WIN, YOU LOSE. TRY AGAIN");
      return finishGame();
    }
    console.log("Deck still have " + deck.length + " cards!"); //checking how many cards are left
  }

  function ViewHand() {
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
          UseCard(e);
          ViewHand();
        },
        true
      );
    }
  }

  /*
  while (deck.length != 0) {
    //main function
    console.log("Your actual hand is:\n");
    console.log(myHand);
    console.log("Choose a card or draw a card and skip the turn!");

    //mossa giocatore
    if (move_player == "SKIP") {
      continue;
    } //player stop or switch cpu

    if (p.hand.length == 0) {
      //victory of player with 0 cards left
      console.log("YOU WIN, CONGRATULATIONS!");
      break;
    }
  }
  */
}

UNOgame();
