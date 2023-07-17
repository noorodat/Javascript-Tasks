let loadBtn = document.querySelector(".task .load-data");

let req = new XMLHttpRequest();

req.open('GET', 'task.json');

req.onload = function() {
    const jsGroup = JSON.parse(this.responseText);
    for(let i = 0; i < jsGroup.names.length; i++) {
        let tableRow = document.createElement("tr");
        let tableDate = document.createElement("td");

        
    }   
}

req.send();