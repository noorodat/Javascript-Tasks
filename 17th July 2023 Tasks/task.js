let loadBtn = document.querySelector(".task .load-data");
let tableBody = document.querySelector(".task table tbody");
let req = new XMLHttpRequest();

req.open('GET', 'task.json');

function loadData() {
    const jsGroup = JSON.parse(req.responseText);

    for(let i = 0; i < jsGroup.names.length; i++) {    
        let tableRow = document.createElement("tr");
        
        let nameData = document.createElement("td");
        nameData.textContent = `${jsGroup.names[i]}`;
        tableRow.appendChild(nameData);

        let ageData = document.createElement("td");
        ageData.textContent = `${jsGroup.ages[i]}`;
        tableRow.appendChild(ageData);

        let majorData = document.createElement("td");
        majorData.textContent = `${jsGroup.majors[i]}`;
        tableRow.appendChild(majorData);

        let uniData = document.createElement("td");
        uniData.textContent = `${jsGroup.universities[i]}`;
        tableRow.appendChild(uniData);
        
        let imgData = document.createElement("td");
        let img = document.createElement("img");
        img.style.width = "50px"
        img.src = `${jsGroup.image}`;
        imgData.appendChild(img);
        tableRow.appendChild(imgData);

        tableBody.appendChild(tableRow);
        
    }
    loadBtn.removeEventListener('click', loadData);
<<<<<<< HEAD
    
=======
>>>>>>> 900d3113dccaac392d59137fcbb42d835e0b45e8
}

loadBtn.addEventListener('click', loadData);


<<<<<<< HEAD
req.send();
=======
req.send();
>>>>>>> 900d3113dccaac392d59137fcbb42d835e0b45e8
