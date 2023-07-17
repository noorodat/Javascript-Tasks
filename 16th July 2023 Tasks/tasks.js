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
    card.classList.add("card");
    
    //name
    let personName = document.createElement("h2");
    let personNameText = document.createTextNode(`${name}`);
    personName.appendChild(personNameText);
    card.appendChild(personName);

    // age
    let personAge = document.createElement("span");
    let personAgeText = document.createTextNode(`${age}`);
    personAge.appendChild(personAgeText);
    card.appendChild(personAge);

    // gender
    let personGender = document.createElement("span");
    let personGenderText = document.createTextNode(`${gender}`);
    personGender.appendChild(personGenderText);
    card.appendChild(personGender);

    // birth date
    let personBirthDate = document.createElement("span");
    let personBirthDateText = document.createTextNode(`${birthDate}`);
    personBirthDate.appendChild(personBirthDateText);
    card.appendChild(personBirthDate);

    // Image
    let personImage = document.createElement('img');
    personImage.src = `${userImage}`;
    card.appendChild(personImage);

    /* --------------------------------------- */

    // descriptipn
    let personDescription = document.createElement("p");
    let personDescriptionText = document.createTextNode(`${description}`);
    personDescription.appendChild(personDescriptionText);
    card.appendChild(personDescription);

    // major
    let personMajor = document.createElement("span");
    personMajor.textContent = `${majorAndUni}`;
    card.appendChild(personMajor);
    

    // programming languagese
    let personLanguges = document.createElement("ul");

    for(let i = 0 ; i < proLanguages.length; i++) {
        let personLangugesElements = document.createElement("li");

        if(proLanguages[i].checked) {
            personLangugesElements.textContent = `${proLanguages[i].value}`;
            personLanguges.appendChild(personLangugesElements);
            localStorage.setItem("languages", JSON.stringify(proLanguages[i].value));
        }

    }

    card.appendChild(personLanguges);

    // siblings number
    let personSiblings = document.createElement("span");
    personSiblings.textContent = `${siblingsNumber}`;
    card.appendChild(personSiblings);

    // siblings description
    let personSiblingsDescription = document.createElement("p");
    personSiblingsDescription.textContent = `${siblingsDescription}`;
    card.appendChild(personSiblingsDescription);

    cardsContaier.appendChild(card);


    // (name, age, gender, birthDate, userImage, description, majorAndUni, proLanguages, siblingsNumber, siblingsDescription)
    let names = JSON.parse(localStorage.getItem("names")) || [];
    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));

    let ages = JSON.parse(localStorage.getItem("ages")) || [];
    ages.push(age);
    localStorage.setItem("ages", JSON.stringify(ages));

    let genders = JSON.parse(localStorage.getItem("genders")) || [];
    genders.push(gender);
    localStorage.setItem("genders", JSON.stringify(genders));

    let dates = JSON.parse(localStorage.getItem("dates")) || [];
    dates.push(birthDate);
    localStorage.setItem("dates", JSON.stringify(dates));

    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(userImage);
    localStorage.setItem("images", JSON.stringify(images));
    
    let descs = JSON.parse(localStorage.getItem("descs")) || [];
    descs.push(description);
    localStorage.setItem("descs", JSON.stringify(descs));

// -------------------




// -------------------
    let majors = JSON.parse(localStorage.getItem("majors")) || [];
    majors.push(majorAndUni);
    localStorage.setItem("majors", JSON.stringify(majors));

    let sibNums = JSON.parse(localStorage.getItem("sibNums")) || [];
    sibNums.push(siblingsNumber);
    localStorage.setItem("sibNums", JSON.stringify(sibNums));

    let sibDescs = JSON.parse(localStorage.getItem("sibDescs")) || [];
    sibDescs.push(siblingsDescription);
    localStorage.setItem("sibDescs", JSON.stringify(sibDescs));


}



let addCard = document.querySelector(".task2 button");


addCard.addEventListener("click" , () => {

    const person = {
        name: document.querySelector(".task2 #name").value,
        age: document.querySelector(".task2 #age").value,
        gender: document.querySelector(".task2 #gender").value,
        birthDate: document.querySelector(".task2 #bdate").value,
        image: document.querySelector(".task2 #image").value,
        description: document.querySelector(".task2 #description").value,
        major: document.querySelector(".task2 #major").value,
        programmingLanguages: document.querySelectorAll(".task2 .langs"),
        siblingsNumber: document.querySelector(".task2 #sib-num").value,
        siblingsDescription: document.querySelector(".task2 #sib-desc").value,
    };

    craeteCard(person.name, person.age, person.gender, person.birthDate, person.image, person.description, person.major, person.programmingLanguages, person.siblingsNumber, person.siblingsDescription);
    
    let forms = document.querySelectorAll(".task2 form");

    for(let i = 0; i < forms.length; i++) {
        forms[i].reset();
    }
});

localStorage.clear();
