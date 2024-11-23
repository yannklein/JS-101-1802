console.log("Hello from application.js!");

// ////////
// Select DOM elements
// ////////

// with its ID (Ruben)
const ruben  = document.querySelector("#ruben-hedstrom");
console.log(ruben);

// with its tag type (h2)
const title = document.querySelector("h2");
console.log(title);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
const list = group.querySelector("ul");
console.log(list);

// select multiple elements (all the card)
// cards is a NodeList, looks like an array

const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (add Jasmine!!!)
const yokoCard = document.querySelector(".card ul");
yokoCard.insertAdjacentHTML(
  "beforeend",
  `<li>
    <img id="jasmine-stivers" src="https://avatars.githubusercontent.com/u/178494344?v=4" alt="">
    <p>Jasmine Stivers</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red"; // color: red;
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "Hi!";

// Read/Write the (inner) text and HTML content (Yokohama FC ⚽️ title)
const yokoTitle = document.querySelector("#yoko");
console.log(yokoTitle.innerText);
console.log(yokoTitle.innerHTML);

yokoTitle.innerHTML = "Hi <em> batch #1802 </em>";