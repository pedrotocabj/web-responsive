const contenedor = document.getElementById("container-board");
const contenedor2 = document.getElementById("container-board2");

function crearTarjetaInicio(){
    shooes.forEach(product => {
        const newProduct = document.createElement("div");
        newProduct.classList = "newProductCard";
        newProduct.innerHTML = `
        <p>${product.name}</p>
        <img src = "${product.img}">
        <p>$${product.price}</p>
        <button id="add-btn">Add To Cart</button>
        `

        contenedor.appendChild(newProduct);
    });
}

function crearTarjetaInicioTshirts(){
    Tshirts.forEach(product => {
        const newProduct = document.createElement("div");
        newProduct.classList = "newProductCard";
        newProduct.innerHTML = `
        <p>${product.name}</p>
        <img src = "${product.img}">
        <p>$${product.price}</p>
        <button id="add-btn">Add To Cart</button>
        `

        contenedor2.appendChild(newProduct);
    });
}
crearTarjetaInicio();
crearTarjetaInicioTshirts();



function optionCheck() {
    const selectOptions = document.getElementById("selector");
    const selectedValue = selectOptions.value;
    helpDiv1 = document.getElementById("container-board");
    helpDiv2 = document.getElementById("container-board2");

    if (selectedValue === "shooes") {
        helpDiv1.classList.remove("hidden-content");
        helpDiv1.classList.add("visible-content");
        helpDiv2.classList.remove("visible-content");
        helpDiv2.classList.add("hidden-content");
    } else {
        helpDiv1.classList.remove("visible-content");
        helpDiv1.classList.add("hidden-content");
        helpDiv2.classList.remove("hidden-content");
        helpDiv2.classList.add("visible-content");
    }
    }
    

const selectOptions = document.getElementById("selector");
selectOptions.addEventListener("change", optionCheck);







