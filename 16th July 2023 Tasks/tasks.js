/* Task1 */

let bodyColor = document.querySelector(".body-color");

bodyColor.onchange = () => {
    document.body.style.background = `${bodyColor.value}`;
    sessionStorage.setItem("bodyColor", `${bodyColor.value}`);
}

document.body.style.background = `${sessionStorage.getItem("bodyColor")}`;
bodyColor.value = `${sessionStorage.getItem("bodyColor")}`;


/* Task2 */
let cardsContaier = document.querySelector(".task2 .cards-container");

function craeteCard(name, age, gender, birthDate, userImage, description, majorAndUni, proLanguages, siblingsNumber, siblingsDescription) {
    // create the card
    let card = document.createElement("div");
    
    //name
    let personName = document.createElement("h2");
    let personNameText = document.createTextNode(`${name.value}`);
    personName.appendChild(personNameText);
    card.appendChild(personName);

    // age
    let personAge = document.createElement("span");
    let personAgeText = document.createTextNode(`${age.value}`);
    personAge.appendChild(personAgeText);
    card.appendChild(personAge);

    // gender
    let personGender = document.createElement("span");
    let personGenderText = document.createTextNode(`${gender.value}`);
    personGender.appendChild(personGenderText);
    card.appendChild(personGender);

    // birth date
    let personBirthDate = document.createElement("span");
    let personBirthDateText = document.createTextNode(`${birthDate.value}`);
    personBirthDate.appendChild(personBirthDateText);
    card.appendChild(personBirthDate);

    // descriptipn
    let personDescription = document.createElement("p");
    let personDescriptionText = document.createTextNode(`${personDescription}`)

}