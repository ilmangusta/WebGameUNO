import { field } from "./field.js";
import { cpu } from "./cpu.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

async function UNOgame() {
  var used_card; //card used by user
  var move_player; //action of the user card
  var move_cpu; //action of the cpu card

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

  const RULES =
    "Welcome in MangustaNotUnoGame, a web based card game.\nRULES: the player can throw more than one card if has STOP or SWITCH cards in his hand. Obviously also the enemy can throw more cards consecutively but due to bad javascript language it can not simulate this behavior of consecutive move with pause (well, it could but not in this particolar action) so there are pop-up alerts to simulate it. If the player draw one card automatically skip the turn and the enemy can play his card. You can tap the field to discover what the color field is. \nPLEASE do not spam your cards or it can break the game. There is a 700ms delay between user move and enemy one. \nHave a nice game!";

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
    btn.textContent = "Start";
    btn.addEventListener(
      "click",
      () => {
        ViewHand();
        modale.remove();
        overlay.remove();
        alert(RULES);
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
        ViewHand();
        sleep(700).then(() => {
          cpuTurn();
        });
      },
      true
    );

    const fieldcontainer = document.querySelector(".ultima-carta");
    fieldcontainer.addEventListener(
      "click",
      () => {
        alert("COLOR: " + f.color);
      },
      true
    );

    const skipbutton = document.querySelector(".skipbutton");
    skipbutton.addEventListener(
      "click",
      () => {
        console.log("salto turno");
        sleep(700).then(() => cpuTurn());
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
  }

  function finishGame() {
    const body = document.querySelector("body");

    const overlay = document.createElement("div");
    overlay.classList.add("black-overlay");
    body.prepend(overlay);

    const modale = document.createElement("div");
    modale.classList.add("prompt-nome");

    modale.prepend(
      document.createElement("p").innerHTML("Match ended, play again?")
    );

    const btnyes = document.createElement("button");
    btnyes.textContent = "Yes";
    btnyes.addEventListener(
      "click",
      () => {
        const newUrl = "https://mangustaunowebapp.netlify.app";
        window.location.replace(newUrl);
      },
      true
    );

    const btnno = document.createElement("button");
    btnno.textContent = "No";
    btnno.addEventListener(
      "click",
      () => {
        alert("MATCH ENDED");
      },
      true
    );

    modale.append(btnyes);
    modale.append(btnno);
    body.prepend(modale);
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
        alert("YOU WIN THE MATCH!!");
        return finishGame();
      }
      if (move_player == "GO") {
        //alert("Turno avversario");
        ViewHandCPU();
        sleep(700).then(() => cpuTurn());
      } else {
        console.log("Avversario salta turno");
      }
    } else {
      //azione non consentita nnon rimuovere carta
      alert("Card not right, color field is: " + f.color);
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
      //console.log("turnenemy: " + turnEnemy);
      if (turnEnemy == "WINCPU") {
        return finishGame();
      } else if (turnEnemy == "GO") {
        return;
      }
      //console.log("cputurn: " + turnEnemy);
    }
    //console.log("out while: " + turnEnemy);
  }

  const cpuMove = () => {
    var value;
    value = enemy.move(p, f, deck);
    console.log("value: " + value);
    ViewHand();
    ViewHandCPU();
    return value;
  };

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

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

UNOgame();
