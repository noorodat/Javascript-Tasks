let productsContainer = document.querySelector(".task .products-container");

fetch(`https://fakestoreapi.com/products`)
.then(response => {
    if(response.ok) {
        return response.json();
    }
    else {
        throw new Error("Some error occured while fetching the API")
    }
})
.then(data => {
    for(let i = 0; i < 4; i++) {
        showProducts(data[i].image, data[i].title, data[i].description, data[i].category, data[i].price, data[i].rating.rate);
    }
})
.catch(error => {
    document.write(`<h1> ${error} </h1>`)
})

function showProducts(pic, name, desc, cat, money, stars) {

    productsContainer.innerHTML += 
    `
    <div class="product">
        <img src="${pic}" alt="cat pic" width="200px">
        <h3 class="title">${name}</h3>
        <p class="description">${desc}</p>
        <div class="info">
            <span class="category">${cat}</span>
            <span class="price">$${money}</span>
        </div>
        <div class="rating">${stars}</div>          
    </div>

    `;
}