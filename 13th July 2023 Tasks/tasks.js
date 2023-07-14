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





