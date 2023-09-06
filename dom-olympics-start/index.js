let headerText = document.getElementById("header");
let headerName = document.createElement("span");
let headerSub = document.createElement("span");

headerText.innerHTML = "Javascript made this";
headerText.classList.add("header");

headerName.classList.remove("header");
headerName.innerHTML = "Jacob Fisher";
headerName.classList.add("name");
headerName.style.fontSize = "25px";

headerSub.innerHTML = " wrote this with Javascript";
headerSub.style.color = "black";
headerSub.style.fontSize = "25px";

headerText.appendChild(headerName);
headerName.appendChild(headerSub);

let messageLeft1 = document.getElementById("messageLeft1");
let messageRight1 = document.getElementById("messageRight1");
let messageLeft2 = document.getElementById("messageLeft2");
let messageRight2 = document.getElementById("messageRight2");

messageLeft1.textContent= "Are you ready to Party?";
messageRight1.textContent= "I'm ready to party!!";
messageLeft2.textContent = "Are you ready to dance?";
messageRight2.textContent = "I'm ready to dance!!";


document.getElementById("clear-button").addEventListener("click", function(){
    console.log("I'm working");
    messageLeft1.remove();
    messageRight1.remove();
    messageLeft2.remove();
    messageRight2.remove();
    }
);

