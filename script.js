// l'effet le plus populaire en JS est le 'clic'

// les différents sélecteurs
// document.querySelector("h4").style.background = "teal";

// const baliseHTML = document.querySelector("h4");
// baliseHTML.style.background = "teal";

// les méthodes sont des fonctions qui sont déjà écrites dans le code source de JS

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
// console.log(btn1, btn2);
// console.log(response);
// questionContainer.style.borderRadius = "150px";

// on a un évènement (click ,submit, mousedown...) suivie d'une fonction déjà codée auparavant
questionContainer.addEventListener("click", () => {
  // questionContainer.style.background = "red";
  // console.log("Click !");
  // questionContainer.classList.add("question-click");
  questionContainer.classList.toggle("question-click");
});
// console.log(questionContainer);

btn1.addEventListener("click", () => {
  console.log("Click 1 !");
  response.classList.add("show-response");
  //response.style.visibility = "visible";
  //response.style.color = "green";
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  console.log("Click 2 !");
  //response.style.visibility = "visible";
  //response.style.color = "red";
  response.classList.add("show-response");
  response.style.background = "red";
});

// ------------------------------------------------------------------------------------------------
// Mouse Events (les évènements que l'on peut avoir sur la souris)
// le plus populaire d'entre eux est 'mouse moove'
// on va commencer par pointer la souris
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// window.addEventListener("mousemove", (e) => {
//   // console.log("MOUSEMOVE !!!");
//   //console.log(e.target);
//   console.log(e.pageX, e.pageY);
// });

window.addEventListener("mousedown", () => {
  // quand le bouton de la souris est appuyé, le rond s'agrandit
  // console.log("test");
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "3px solid red";
});

window.addEventListener("mouseup", () => {
  // quand le bouton de la souris est relaché, le rond reprend sa forme initiale
  // console.log("test");
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  // quand la souris survole une zone (ça n'est pas un hover)
  questionContainer.style.background = "rgba(0,0,0,0.6";
});

questionContainer.addEventListener("mouseout", () => {
  // quand la souris sort de la zone survolée
  questionContainer.style.background = "black";
});

response.addEventListener("mouseover", () => {
  // comme un hover
  response.style.transform = "rotate(2deg)";
});

// ------------------------------------------------------------------------------------------------
//keypress event (correspond à l'appui d'une touche du clavier)
const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);
const key = document.getElementById("key");
// console.log(key);

// pour mettre/ajouter un son
// const ring = () => {
//   // création d'une variable qui est new Audio, qui est un objet de JS qui a été codé dans le code source pour faire de l'audio
//   // c'est un objet car il y a 'new' et que le nom commence par une majuscule
//   const audio = new Audio();
//   audio.src = "./z.mp3";
//   audio.play(); // méthode de l'objet audio
// };
// pour appeler la fonction
// ring();
// pour ne coder qu'une seule fois cette fonction si jamais on a plusieurs sonneries à faire retentir
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};
// pour appeler cette fonction
// ring('z');
// ring(e.key)

document.addEventListener("keypress", (event) => {
  // console.log("yes");
  // console.log(event.key);
  // key.textContent = "voici du texte";
  key.textContent = event.key;

  if (event.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (event.key === "h") {
    keypressContainer.style.color = "red";
  } else {
    keypressContainer.style.color = "white";
    keypressContainer.style.background = "black";
  }

  // appel déclenchement de la sonnette
  // ring()
  // se joue suivant la touche sur laquelle on apppuie. On a un fichier m.mp3 et z.mp3, donc les sons se joueront si on appuie sur m ou z
  // ring("z");
  if (event.key === "z") ring(event.key);
});

// ------------------------------------------------------------------------------------------------
// la navbar, le scroll
// Scroll Event

const nav = document.querySelector("nav");
//console.log(nav);

// les évènements sur le scroll sont avec l'évènement window
window.addEventListener("scroll", () => {
  // console.log("Test !");
  //console.log(window.scrollY); // valeur en px qui a été scrollée

  if (window.scrollY > 120) {
    // si la valeur que l'on a logguée est > à 120px, alors révéler la navigation
    nav.style.top = 0;
  } else {
    // sinon, tu disparaîs
    nav.style.top = "-55px";
  }
});

// ------------------------------------------------------------------------------------------------
// les évènements sur les formulaires (input)
// Form Events
const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
const select = document.querySelector("select");
// console.log(select);
const form = document.querySelector("form");
// console.log(form);

// pour stocker ce qui est tapé dans l'input. Boîte réutilisable, que l'on peut utiliser n'importe quand
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  // console.log("yes !");
  // on récupère les datas qu'on met dans la fonction, le paramètre qu'on met dans la fonction
  // console.log(e.target.value); // pour savoir ce qui est tapé dans l'input
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  // console.log(e);
  //   console.log(e.target.value);
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // méthode permettant de se prémunir du comportement par défaut du navigateur (qui est de changer de page quand on valide le formulaire, on annule ce changement de page)

  // console.log("yes !!!"); // furtif car on change de page

  console.log(cgv.checked);
  // s'assurer que les CGV soient cochées avant la validation du formulaire
  if (cgv.checked) {
    // on affiche le contenu des variables
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>`;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// ------------------------------------------------------------------------------------------------
// Load Event (se déclenche une fois que toute la page a été chargée)
window.addEventListener("load", () => {
  //console.log("document chargé !!!");
});

// ------------------------------------------------------------------------------------------------
// forEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// boxes.addEventListener("click", () => console.log("test")); // boxes.addEventListener is not a funtion      on ne peut pas ajouter un addEventListener sur 3 éléments, il faut les distinguer
boxes.forEach((box) => {
  // box représente chaque boxes individuellement
  box.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.style.transform = "scale(0.7)";
  });
});

// ------------------------------------------------------------------------------------------------
// addEventListener vs onclick/onscroll
// addEventListener est recommandé car on l'accolle à l'élément que l'on veut

// le onclick n'est pas forcément recommandé car on ne peut pas mettre plusieurs 'onclick' à un élément. Il peut être utilisé directement dans l'HTML à condition qu'il ne soit pas déjà inscrit dans le script.js, mais ça n'est pas recommandé
// Dans le cas ci-dessous, uniquement le 2ème onclick sera pris en compte. on ne peut pas propager 2 fois le même évènement sur une balise, alors qu'avec le addEventListener, on peut
// document.body.onclick = function () {
//   // OU   document.body.onclick = () => {
//   console.log("click !");
// };
// document.body.onclick = function () {
//   // OU   document.body.onclick = () => {
//   console.log("scroll !");
// };

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/
// Bubbling => pour déclencher l'évènement à la fin (de base, l'eventListener est paramétré en mode Bubbling)
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  } // de base, il est sur false
);

// Usecapture => pour qu'il se déclenche immédiatement
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

// ------------------------------------------------------------------------------------------------
// stopPropagation
// pour arrêter la propagation
questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  e.stopPropagation();
});

// removeEventListener = pour retirer l'eventListener

// ------------------------------------------------------------------------------------------------
// BOM (Browser Object Model)
// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600", "width=800");
// window.close(); // pour fermer la fenêtre

// Evènements adossés à Window
// alert("hello !");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez-vous vraiment fermer la fenêtre ?");
});

// prompt
let answer;
btn1.addEventListener("click", () => {
  // prompt("Bravo ! Entrez votre nom pour recevoir la récompense :"); // la réponse ne sera pas stockée. Pour la stocker et la récupérer :
  answer = prompt("Bravo ! Entrez votre nom pour recevoir la récompense :"); // pour voir la réponse, dans la console du navigateur, taper 'console.log(answer)'
  // OU
  //questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
  //questionContainer.innerHTML = `<h3>Bravo ${answer}</h3>`; // ça écrase ce qu'il y a dans questionContainer
  questionContainer.innerHTML += `<h3>Bravo ${answer}</h3>`; // ça se met à la suite de ce qu'il y a dans questionContainer
});

// setTimeout = timer, compte à rebours
setTimeout(() => {
  // logique à exécuter
  questionContainer.style.borderRadius = "300px";
}, 2000);

// setInterval
// seul, il crée une boucle infinie, pour l'arrêter, il faut le mettre dans une variable et ajouter un évènement pour l'arrêter
// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class='box'><h2>Nouvelle Boîte !</h2>";
// }, 1000);
// document.body.addEventListener("click", () => {
//   clearInterval(interval);
// });

// remove = pour retirer un élément du DOM
// document.body.addEventListener("click", (e) => {
//   e.target.remove();
// });

// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://google.com");

// navigator
// on peut obtenir la localisation de l'utilisateur
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//console.log(navigator.userAgent);
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// history
// console.log(history);
// window.history.back(); // pour revenir 1 page en arrière
// history.go(-3); // pour revenir à -n page en arrière

// ------------------------------------------------------------------------------------------------
// setProperty
window.addEventListener("mousemove", (e) => {
  //console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
