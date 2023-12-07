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

    if (card[0] == "+4CARDS") {
      var color = prompt("Choose a color: GREEN RED BLUE YELLOW");
      f.color = color.toUpperCase();
      cpu.draw(4, deck);
      return "GO";
    } else if (card[0] == "CHANGE") {
      var color = prompt("Choose a color: GREEN RED BLUE YELLOW");
      f.color = color.toUpperCase();
      f.number = -1;
      return "GO";
    } else if (card[0] == "+2CARDS") {
      console.log("Enemy draw 2 cards!");
      cpu.draw(2, deck);
      return "GO";
    } else if (card[0] == "STOP") {
      console.log("Enemy skip one turn!");
      return "SKIP";
    } else if (card[0] == "SWITCH") {
      console.log("Change Spin! Enemy skip one turn!");
      return "SKIP";
    }
    return "GO";
  }

  discard(card, i, deck) {
    if (this.hand.length == 1) {
      if (
        card[1] == "SPECIAL" ||
        card[0] == "+2CARDS" ||
        card[0] == "SWITCH" ||
        card[0] == "STOP"
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

  setColorButtons() {
    const body = document.querySelector("body");

    const overlay = document.createElement("div");
    overlay.classList.add("black-overlay");
    body.prepend(overlay);

    const colorbuttons = document.createElement("div");
    colorbuttons.classList.add("color-buttons");

    var btnred = document.createElement("button");
    var btngreen = document.createElement("button");
    var btnblue = document.createElement("button");
    var btnyellow = document.createElement("button");
    var colorchoose = null;

    btnred.textContent = "RED";
    btnred.addEventListener(
      "click",
      () => {
        colorchoose = btnred.textContent;
        overlay.remove();
        colorbuttons.remove();
      },
      true
    );

    btngreen.textContent = "GREEN";
    btngreen.addEventListener(
      "click",
      () => {
        colorchoose = btngreen.textContent;
        overlay.remove();
        colorbuttons.remove();
      },
      true
    );

    btnblue.textContent = "BLUE";
    btnblue.addEventListener(
      "click",
      () => {
        colorchoose = btnblue.textContent;
        overlay.remove();
        colorbuttons.remove();
      },
      true
    );

    btnyellow.textContent = "YELLOW";
    btnyellow.addEventListener(
      "click",
      () => {
        colorchoose = btnyellow.textContent;
        overlay.remove();
        colorbuttons.remove();
      },
      true
    );

    colorbuttons.append(btnred);
    colorbuttons.append(btngreen);
    colorbuttons.append(btnblue);
    colorbuttons.append(btnyellow);
    body.prepend(colorbuttons);
    console.log(colorchoose);
    return colorchoose;

    /*
    const radiobutton = document.createElement("div");
    radiobutton.classList.add("radio-button");

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");

    const divbutton = document.createElement("div");
    divbutton.classList.add("radiobuttons");

    const button1 = document.createElement("div");
    const input1 = document.createElement("input");
    const label1 = document.createElement("label1");
    input1.setAttribute("type", "radio");
    input1.setAttribute("value", "RED");
    input1.setAttribute("id", "red");
    label1.setAttribute("for", "red");
    button1.prepend(label1);
    button1.prepend(input1);

    const button2 = document.createElement("div");
    const input2 = document.createElement("input");
    const label2 = document.createElement("label2");
    input2.setAttribute("type", "radio");
    input2.setAttribute("value", "YELLOW");
    input2.setAttribute("id", "yellow");
    label2.setAttribute("for", "yellow");
    button2.prepend(label2);
    button2.prepend(input2);

    const button3 = document.createElement("div");
    const input3 = document.createElement("input");
    const label3 = document.createElement("label3");
    input3.setAttribute("type", "radio");
    input3.setAttribute("value", "GREEN");
    input3.setAttribute("id", "green");
    label3.setAttribute("for", "green");
    button3.prepend(label3);
    button3.prepend(input3);

    const button4 = document.createElement("div");
    const input4 = document.createElement("input");
    const label4 = document.createElement("label4");
    input4.setAttribute("type", "radio");
    input4.setAttribute("value", "BLUE");
    input4.setAttribute("id", "blue");
    label4.setAttribute("for", "blue");
    button4.prepend(input4);
    button4.prepend(label4);

    divbutton.prepend(input4);
    divbutton.prepend(input3);
    divbutton.prepend(input2);
    divbutton.prepend(input1);

    body.prepend(divbutton);
    */

    /*
    radiobutton.modale.prepend(document.createElement("input"));
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

  
          <fieldset>
      <legend>Select a maintenance drone:</legend>

      <div>
        <input type="radio" id="huey" name="drone" value="huey" checked />
        <label for="huey">Huey</label>
      </div>

      <div>
        <input type="radio" id="dewey" name="drone" value="dewey" />
        <label for="dewey">Dewey</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">Louie</label>
      </div>
    </fieldset>

    */
  }
}
