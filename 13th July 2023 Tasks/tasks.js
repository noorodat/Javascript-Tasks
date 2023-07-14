// Task1
let cardsContainer = document.querySelector(".cards-container");

function createCard(cardTitle, cardAge) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = `${cardTitle}`;
    card.appendChild(title);

    let age = document.createElement("span");
    age.classList.add("card-age");
    age.textContent = `${cardAge}`;
    card.appendChild(age);

    let image = document.createElement("img");
    image.classList.add("card-image");
    image.src = "miles morals.jpg";
    image.style.width = "250px";
    card.appendChild(image);

    cardsContainer.appendChild(card);

}

let cardTitles = ['Title1', 'Title2', 'Title3', 'Title4'];

let cardAges = ['age1', 'age2', 'age3', 'age4'];

for(let i = 0; i < 4; i++) {
    createCard(cardTitles[i], cardAges[i]);
}

/* --------------------------------------------- */

// Task2
let task2 = document.querySelector(".task2");
let task2Para = document.querySelector(".task2 p");

task2Para.textContent = "Can i help you?";
task2Para.style = "background-color: yellow; text-align: center; font-size: 30px; "

task2Para.onmouseover = () => {
    task2Para.textContent = "Hello World!";
}

task2Para.onmouseleave = () => {
    task2Para.textContent = "Can i help you?"
}

/* --------------------------------------------- */

// Task3

let conutries = document.querySelector(".task3 select");
let flag = document.querySelector(".task3 img");

if(conutries.value === "jordan") {
    flag.src = "Jordan.png";
}

conutries.onchange = () => {
    if(conutries.value === "jordan") {
        flag.src = "Jordan.png";
    }
    else if(conutries.value === "palestine") {
        flag.src = "palestine.png";
    }
}

/* --------------------------------------------- */

// Task4

let fonts = document.querySelectorAll(".task4 select");

let fontDecorations = document.querySelectorAll(".task4 input");

let task4Para = document.querySelector(".task4 p");

task4Para.style = "border: 3px solid black; padding: 20px; height: 240px; width: 600px"

fonts[0].onchange = () => {
    task4Para.style.fontFamily = `${fonts[0].value}`;
}

fonts[1].onchange = () => {
    task4Para.style.fontSize = `${fonts[1].value}`;
}


for(let i = 0; i < fontDecorations.length; i++) {
    fontDecorations[i].onchange = () => {
        if(fontDecorations[i].checked) {
            if(fontDecorations[i].id == "italic") {
                task4Para.style.fontStyle = `italic`;
            }
            else if (fontDecorations[i].id == "bold") {
                task4Para.style.fontWeight = `bold`;
            }
            else {
                task4Para.style.textDecoration = `underline`;
            }
        }
        else {
            task4Para.style.fontStyle = "initial";
            task4Para.style.fontWeight = "initial";
            task4Para.style.textDecoration = "initial";
        }
    } 
}

















