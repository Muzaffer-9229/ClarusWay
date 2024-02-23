"use strict ";

title.textContent = "Javascript DOM Assignment 1";

document.querySelector("header").style.backgroundColor = "yellow";
document.querySelector("header").style.padding = "10px";
document.querySelector("header").style.color = "blue";
document.querySelector("header").style.textAlign = "center";
document.querySelector("header").style.fontSize = "1.5rem";

// console.log(document.querySelector(".nav-item"));
document.querySelector(".nav-item").style.display = "Flex";
document.querySelector(".nav-item").style.justifyContent = "center";
document.querySelector(".nav-item").style.gap = "2rem";
document.querySelector(".nav-item").style.listStyle = "none";
document.querySelector(".nav-item").style.fontSize = "1.5rem";

// console.log(document.querySelector("#input"));
document.querySelector("#input").style.backgroundColor = "red";
document.querySelector("#input").style.padding = "12px";
document.querySelector("#input").style.borderRadius = " 10px";

// console.log(document.querySelector("#username"));
document.querySelector("#username").value = "Anthony";
document.querySelector("#username").style.padding = "10px";
document.querySelector("#username").style.borderRadius = "8px";

// console.log(document.querySelector("#password"));
document.querySelector("#password").value = "123456";
document.querySelector("#password").style.padding = "10px";
document.querySelector("#password").style.borderRadius = " 8px";

// console.log(document.querySelector(".btn"));
document.querySelector(".btn").textContent = "Giris Yap";
document.querySelector(".btn").style.backgroundColor = "green";
document.querySelector(".btn").style.padding = "12px";
document.querySelector(".btn").style.color = "white";
document.querySelector(".btn").style.textAlign = "center";
document.querySelector(".btn").style.border = "none";
document.querySelector(".btn").style.borderRadius = " 10px";

// console.log(document.getElementById("projects"));
document.getElementById("projects").innerText = "Js Dom Projects";
document.getElementById("projects").style.backgroundColor = "red";
document.getElementById("projects").style.fontSize = "2rem";

// console.log(document.getElementsByTagName("ul"));

const projectsAfter = document.getElementById("projects");

projectsAfter.style.cssText =
  "text-align: left; margin: 0 auto; width: fit-content; line-height: 2rem; cursor: pointer; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
// projectsAfter.textContent = "JS Dom Projects";
const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];
for (let i = 0; i < myProjects.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = myProjects[i];
  projectsAfter.appendChild(newLi);
}
