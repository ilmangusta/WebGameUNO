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

  let enemy = new cpu();
  enemy.newHand(deck); //Avversario ha le carte

  let f = new field();
  f.newField(deck);

  let p = new Player();
  p.newHand(deck);
  console.log(p.hand);

  //2. inizio la routine del gioco
  createField(f);
  StartNewGame();

  function createField(f) {
    const cardContainer = document.querySelector(".ultima-carta");
    const image = document.createElement("img");
    image.src = f.card[2];
    cardContainer.prepend(image);
  }

  setTimeout(() => {
    alert("Deck still have " + deck.length + " cards!"); //checking how many cards are left
  }, 2000);

  function StartNewGame() {
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
        ViewHand();
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
        DrawCard(1);
        cpuTurn();
      },
      true
    );

    const skipbutton = document.querySelector(".skipbutton");
    skipbutton.addEventListener(
      "click",
      () => {
        console.log("salto turno");
        cpuTurn();
      },
      true
    );
  }

  function DrawCard(i) {
    p.draw(1, deck);
    ViewHand();
  }

  function finishGame() {
    return;
  }

  function UseCard(e) {
    const index = e.target.closest("div").getAttribute("data-number");
    var move_player;
    var card = p.hand[index];
    console.log(card);
    if (checkMove(card)) {
      //scelta carta ok
      move_player = p.move(card, f, deck, enemy);
      p.discard(card, index, deck);
      if (p.hand.length == 0) {
        return finishGame();
      }
      if (move_player == "GO") {
        console.log("Turno avversario");
        cpuTurn();
      } else {
        console.log("Avversario salta turno");
      }
    } else {
      //azione non consentita nnon rimuovere carta
      console.log("carta non giusta. Campo è:" + f.card);
      return;
    }
  }

  function checkMove(card) {
    if (
      card[0] == f.number ||
      card[1] == f.color ||
      card[0] == "+4CARDS" ||
      card[0] == "CHANGE"
    ) {
      return true;
    } else {
      return false;
    }
  }

  function cpuTurn() {
    var turnEnemy = "SKIP";
    while (turnEnemy == "SKIP") {
      turnEnemy = cpuMove();
    }
  }

  function cpuMove() {
    setTimeout(() => {
      var move_cpu = enemy.move(p, f, deck); //cpu moving
      ViewHand();
      if (enemy.hand.length == 0) {
        return finishGame();
      } else console.log("Deck still have " + deck.length + " cards!"); //checking how many cards are left
      return move_cpu;
    }, 780);
  }

  function ViewHand() {
    const myCardContainer = document.querySelector(".my-cards-container");
    myCardContainer.innerHTML = "";
    for (var i = 0; i < p.hand.length; i++) {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("my-card-element");
      cardContainer.setAttribute("data-number", i);
      const image = document.createElement("img");
      image.src = p.hand[i][2];
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
}

UNOgame();
