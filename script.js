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
console.log(btn1, btn2);
console.log(response);
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
