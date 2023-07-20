/* Task1 */

let bodyColor = document.querySelector(".body-color");

bodyColor.onchange = () => {
    document.body.style.background = `${bodyColor.value}`;
    sessionStorage.setItem("bodyColor", `${bodyColor.value}`);
}

document.body.style.background = `${sessionStorage.getItem("bodyColor")}`;
bodyColor.value = `${sessionStorage.getItem("bodyColor")}`;

/* ####################################################################################### */

/* Task2 */
let cardsContaier = document.querySelector(".task2 .cards-container");
let addCard = document.querySelector(".task2 button");

// get inputs
addCard.addEventListener('click', () => {

    cardsContaier.innerHTML = "";

    let memberName = document.querySelector(".task2 #name");
    let memeberAge = document.querySelector(".task2 #age");
    let memeberGender = document.querySelector(".task2 #gender");
    let memeberBirthDate = document.querySelector(".task2 #bdate");
    let memeberImage = document.querySelector(".task2 #image");
    let memeberDesc = document.querySelector(".task2 #description");
    let memeberEdu = document.querySelector(".task2 #major");
    let memeberLanguages = document.querySelectorAll(".task2 .langs");

    let langs = [];
    for(let i = 0; i < memeberLanguages.length; i++) {
        if(memeberLanguages[i].checked) {
            langs.push(memeberLanguages[i].value);
        }
    }

    let siblingsNumber = document.querySelector(".task2 #sib-num");
    let siblingsDesc = document.querySelector(".task2 #sib-desc");

    cardsContaier.innerHTML = 
    `
        <div class="card">
            <h2>${memberName.value}</h2>
            <span>${memeberAge.value}</span>
            <span>${memeberGender.value}</span>
            <span>${memeberBirthDate.value}</span>
            <img src="${memeberImage.value}">
            <p>${memeberDesc.value}</p>
            <span>${memeberEdu.value}</span>
            <p>${langs.join(" ")}</p>
            <span>${siblingsNumber.value}</span>
            <p>${siblingsDesc.value}</p>
        </div>
    `;

    // set into localstorage

    localStorage.setItem("name", memberName.value);
    localStorage.setItem("age", memeberAge.value);
    localStorage.setItem("gender", memeberGender.value);
    localStorage.setItem("birthdate", memeberBirthDate.value);
    localStorage.setItem("image",memeberImage.value);
    localStorage.setItem("description", memeberDesc.value);
    localStorage.setItem("education", memeberEdu.value);
    localStorage.setItem("languages", JSON.stringify(langs));
    localStorage.setItem("sibNum", siblingsNumber.value);
    localStorage.setItem("sibDesc", siblingsDesc.value);

});

cardsContaier.innerHTML = 
`
    <div class="card">
        <h2>${localStorage.getItem("name")}</h2>
        <span>${localStorage.getItem("age")}</span>
        <span>${localStorage.getItem("gender")}</span>
        <span>${localStorage.getItem("birthdate")}</span>
        <img src="${localStorage.getItem("image")}">
        <p>${localStorage.getItem("description")}</p>
        <span>${localStorage.getItem("education")}</span>
        <p>${JSON.parse(localStorage.getItem("languages")).join(" ")}</p>
        <span>${localStorage.getItem("sibNum")}</span>
        <p>${localStorage.getItem("sibDesc")}</p>
    </div>
`;

/* ####################################################################################### */

// Task 3

// get all spans
let errorMessage = document.querySelectorAll(".task3 form span");


// First name validation
let firstName = document.querySelector(".task3 #fName");
let firstNameReg = /^[^0-9]*$/;
firstName.onkeyup = () => {
    if(!firstNameReg.test(firstName.value)) {
        errorMessage[0].style.display = "inline";
    }
    else {
        errorMessage[0].style.display = "none";
    }
}

// Date validation
let birthDate = document.querySelector(".task3 #date");
let birthDateReg = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

birthDate.onkeyup = () => {
    if(!birthDateReg.test(birthDate.value) && birthDate.value !== '') {
        errorMessage[2].style.display = "inline";
    }
    else {
        errorMessage[2].style.display = "none";
    }
}

// Email validation
let emails = document.querySelectorAll(".task3 .email");

let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

emails[0].onkeyup = () => {
    if(!emailReg.test(emails[0].value) && emails[0].value !== '') {
        errorMessage[3].style.display = "inline";
    }
    else {
        errorMessage[3].style.display = "none";
    }
}

emails[1].onkeyup = () => {
    if(emails[0].value !== emails[1].value && emails[1].value !== '') {
        errorMessage[4].style.display = "inline";
    }
    else {
        errorMessage[4].style.display = "none";
    }
}

// password validation

let passwords = document.querySelectorAll(".task3 .password");
let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
// at least 8 + num + Capital char

passwords[0].onkeyup = () => {
    if(!passwordReg.test(passwords[0].value) && passwords[0].value !== '') {
        errorMessage[5].style.display = "inline";
    }
    else {
        errorMessage[5].style.display = "none";
    }
}

passwords[1].onkeyup = () => {
    if(passwords[0].value !== passwords[1].value && passwords[1].value !== '') {
        errorMessage[6].style.display = "inline";
    }
    else {
        errorMessage[6].style.display = "none";
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 900d3113dccaac392d59137fcbb42d835e0b45e8
