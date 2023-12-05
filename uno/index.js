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
  ViewHandCPU();

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
        console.log("pesco carta");
        DrawCard();
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

    const statsbutton = document.querySelector(".buttonleft2");
    statsbutton.addEventListener(
      "click",
      () => {
        alert("Non fa nulla sto coso");
      },
      true
    );

    const newgamebutton = document.querySelector(".buttonleft1");
    newgamebutton.addEventListener(
      "click",
      () => {
        const newUrl = "https://mangustaunowebapp.netlify.app";
        window.location.replace(newUrl);
      },
      true
    );
  }

  function DrawCard() {
    p.draw(1, deck);
    ViewHand();
  }

  function finishGame() {
    alert("GIOCO FINITO, GIOCARE ANCORA?");
    const newUrl = "https://mangustaunowebapp.netlify.app";
    window.location.replace(newUrl);
    return;
  }

  function UseCard(e) {
    const index = e.target.closest("div").getAttribute("data-number");
    var move_player, res;
    var card = p.hand[index];
    console.log(card);
    if (checkMove(card)) {
      //scelta carta ok
      move_player = p.move(card, f, deck, enemy);
      res = p.discard(card, index, deck);
      if (res === "PLAYERWIN" || p.hand.length === 0) {
        alert("HAI VINTO COGLIOOOO");
        return finishGame();
      }
      if (move_player == "GO") {
        //alert("Turno avversario");
        setTimeout(() => {
          cpuTurn();
        }, 700);
      } else {
        console.log("Avversario salta turno");
      }
    } else {
      //azione non consentita nnon rimuovere carta
      alert("carta non giusta. Campo è: " + f.number + " " + f.color);
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
      if (turnEnemy == "WINCPU") {
        return finishGame();
      }
      console.log("cputurn: " + turnEnemy);
    }
  }

  function cpuMove() {
    var move_cpu = enemy.move(p, f, deck); //cpu moving
    ViewHand();
    ViewHandCPU();
    return move_cpu;
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
          ViewHandCPU();
        },
        true
      );
    }
  }

  function ViewHandCPU() {
    const myCardContainer = document.querySelector(".cpu-cards");
    myCardContainer.innerHTML = "";
    for (var i = 0; i < enemy.hand.length; i++) {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("cpu-card-element");
      const image = document.createElement("img");
      image.src = "images/joker.png";
      cardContainer.prepend(image);
      myCardContainer.prepend(cardContainer);
    }
  }
}

UNOgame();
