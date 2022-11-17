let jeu = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let joueur0;
let joueur1;
let joueur2;
let finish0;
let finish1 = false;
let finish2 = true;
let bouton0;
let bouton2 = document.querySelector(".bouton2");
let bouton3 = document.querySelector(".bouton3");
let bouton1 = document.querySelector(".bouton1");
let joueur = [joueur0, joueur1, joueur2];
let finish = [finish0, finish1, finish2];
let bouton = [bouton0, bouton1, bouton2];

//Déclaration des variables
let symboles = ["X", "O"];
let ligne;
let colonne;
let affichage = document.querySelector(".result");
let body = document.querySelector("body");
let back1 = document.querySelector(".back1");
let back2 = document.querySelector(".back2");




let i = 0;
let x = 1;
let y = 2;

symbolechoice(x);

function okcool(a, b) {

  i++

  if (i % 2 === 0) { x = 2, y = 1 }
  else { x = 1, y = 2 }


  ligne = a;
  colonne = b;

  jeu[ligne][colonne] = joueur[x];

  var span = document.querySelector(".num" + ligne + colonne);
  span.innerHTML = "";

  writeMorpion(x)

  var span = document.querySelector(".num" + ligne + colonne);
  span.innerHTML = "";


  affichage.innerHTML = "Joueur " + y + ", à vous de jouer ! ";
  bouton[x].classList.remove("anim");
  bouton[y].classList.add("anim");
  finish[x] = true;
  finish[y] = false;

  if (result() === true) {
    finish[x] = true;
    victoryfest(x);
    bouton[x].classList.remove("anim");
    bouton[y].classList.remove("anim");
  }

  testnull()
}

