
function choix() {
  var onSplit = ligneEtcol.split("");
  ligne = onSplit[0];
  colonne = onSplit[1];
}

// Fonction contrôlant les cases vides (Match nul)

function testnull() {
  if (
    jeu[0][0] !== null &&
    jeu[1][0] !== null &&
    jeu[2][0] !== null &&
    jeu[0][1] !== null &&
    jeu[1][1] !== null &&
    jeu[2][1] !== null &&
    jeu[0][2] !== null &&
    jeu[1][2] !== null &&
    jeu[2][2] !== null
  ) {
    alert("Match nul");
    bouton3.classList.add("anim");
    bouton1.classList.remove("anim");
    bouton2.classList.remove("anim");
  }
}

// Choix initial du joueur 1, puis affectation du symbole au joueur 2

/*function symbolechoice(x) {
    let y;
    x===1?y=2:y=1;
    if (joueur[y] !== symboles[0] && joueur[y] !== symboles[1]) {
    joueur[x] = prompt("Joueur "+x+", choisissez votre symbole. \n X ou O ?");
    while (joueur[x] !== "X" && joueur[x] !== "O") {
    alert("choix non valide");
    joueur[x] = prompt("joueur"+x+ ", choisissez entre " + symboles);
    }
    (joueur[x]===symboles[0])? joueur[y]=symboles[1] :joueur[y]=symboles[0];
 }
}*/
// Fonction étudiant la victoire

function result() {
  for (let i = 0, j = 0; i < 3, j < 3; i++, j++) {
    if (
      jeu[i][0] === jeu[i][1] &&
      jeu[i][1] !== null &&
      jeu[i][1] === jeu[i][2] &&
      jeu[i][2] !== null
    ) {
      document.querySelector('.td' + i + '0').classList.add("anim");
      document.querySelector('.td' + i + '1').classList.add("anim");
      document.querySelector('.td' + i + '2').classList.add("anim");
      return true;
    }

    if (
      jeu[0][j] === jeu[1][j] &&
      jeu[1][j] !== null &&
      jeu[1][j] === jeu[2][j] &&
      jeu[2][j] !== null
    ) {
      document.querySelector('.td0' + j).classList.add("anim");
      document.querySelector('.td1' + j).classList.add("anim");
      document.querySelector('.td2' + j).classList.add("anim");
      return true;
    }


    if (
      jeu[0][0] === jeu[1][1] &&
      jeu[1][1] !== null &&
      jeu[1][1] === jeu[2][2] &&
      jeu[2][2] !== null
    ) {
      document.querySelector('.td00').classList.add("anim");
      document.querySelector('.td11').classList.add("anim");
      document.querySelector('.td22').classList.add("anim");
      return true;
    }

    if (
      jeu[0][2] === jeu[1][1] &&
      jeu[1][1] !== null &&
      jeu[1][1] === jeu[2][0] &&
      jeu[2][0] !== null
    ) {
      document.querySelector('.td02').classList.add("anim");
      document.querySelector('.td11').classList.add("anim");
      document.querySelector('.td20').classList.add("anim");
      return true;
    }
  }
}

function testnull() {
  if (
    jeu[0][0] !== null &&
    jeu[1][0] !== null &&
    jeu[2][0] !== null &&
    jeu[0][1] !== null &&
    jeu[1][1] !== null &&
    jeu[2][1] !== null &&
    jeu[0][2] !== null &&
    jeu[1][2] !== null &&
    jeu[2][2] !== null
  ) {
    affichage.innerHTML = "Match nul...";
    bouton3.classList.add("anim");
    bouton1.classList.remove("anim");
    bouton2.classList.remove("anim");
  }
}
// Fonction permettant de rentrer ligne et colonnes en une fois

function choix(x) {
  let ligneEtcol = prompt(
    "Joueur " + x + ", vous avez le symbole"
    + joueur[x] +
    ". \nChoisissez une case (ex:01)"
  );

  let onSplit = ligneEtcol.split("");
  ligne = onSplit[0];
  colonne = onSplit[1];
}

// Fonction contrôlant le choix du joueur (ligne et colonnes)

function casetest(x) {
  while (
    ligne < 0 ||
    ligne > 2 ||
    colonne < 0 ||
    colonne > 2 ||
    ligne === undefined ||
    colonne === undefined
  ) {
    alert("Choix des lignes et colonnes invalide ");
    ligneEtcol = prompt(
      "Joueur " + x + " :choisissez une ligne et une colonne, ex:01"
    );
    choix();
  }
}

// Fonction contrôlant que la case choisie soit vide

function casevide(x) {
  while (jeu[ligne][colonne] !== null) {
    alert("case non vide");
    ligneEtcol = prompt(
      "Joueur " + x + " :choisissez une ligne et une colonne, ex:01"
    );
    choix();
    casetest(x);
  }
}

// Fonction affectant le symbole en HTML

function writeMorpion(x) {
  if (joueur[x] === "X") {
    var img = document.querySelector(".cross" + ligne + colonne);
    img.style.display = "block";
  } else if (joueur[x] === "O") {
    var img = document.querySelector(".circle" + ligne + colonne);
    img.style.display = "block";
  }
}

function victoryfest(x) {
  if (finish[x]) {
    affichage.innerHTML = "C'est gagné joueur " + x + " !";
    bouton[x].classList.remove("anim");
    bouton3.classList.add("anim");
    body.classList.add("gagne");
    affichage.classList.add("victoire");
  }
}

// Fonction rejouer

function reload() {
  location.reload();

}

// Ouvre la modale choix du symbole

function symbolechoice(x) {
  let modale = document.querySelector('.modale');
  modale.style.display = "block";
}


// choix du symbole pour le joueur 1

function choix1() {
  joueur[1] = "X";
  let modale = document.querySelector('.modale');
  modale.style.display = "none";
  joueur[2] = "O"
}

function choix2() {
  joueur[1] = "O";
  let modale = document.querySelector('.modale');
  modale.style.display = "none";
  joueur[2] = "X";
}
