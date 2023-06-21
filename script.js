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
console.log(questionContainer);

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

// -------------------------------------------------------------------
// Mouse Events (les évènements que l'on peut avoir sur la souris)
// le plus populaire d'entre eux est 'mouse moove'
// on va commencer par pointer la souris
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// window.addEventListener("mousemove", (e) => {
//   console.log("MOUSEMOVE !!!");
//   console.log(e.target);
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

//---------------------------------------------------------------------
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
  ring(event.key);
});
