let button = document.querySelector("button");
button.addEventListener("click", ChargeInfosjson);

function ChargeInfosjson() {
    fetch("pizzas.json")
        .then((pizza) => pizza.json()
        )

        .then((data) => {
            console.log(data);
            createHTML(data);

        }
        )
}

function createHTML(_data) {
    const preview = document.getElementsByClassName("preview")[0];
    preview.innerHTML = "";

    const pizzeriaName = document.createElement("div");
    pizzeriaName.innerHTML = _data.Name;
    pizzeriaName.setAttribute("class", "nomPizzeria");
    preview.appendChild(pizzeriaName);


    const sloganLuigi = document.createElement("div");
    sloganLuigi.innerHTML = _data.Slogan;
    sloganLuigi.setAttribute("class", "sloganPizzeria");
    preview.appendChild(sloganLuigi);

    let listePizza=_data.Pizzas;
    let pizzeriaListePizza=document.createElement("div");
    pizzeriaListePizza.setAttribute("class","contenu");

    for (let index = 0; index < _data.Pizzas.length; index++) {
        const element = _data.Pizzas[index];
        const ingredients = element.Ingredients
        preview.innerHTML +=
            "<div id='pizza-" + index + "' ><h2>" + element.Nom + "</h2><h3>" + element.Prix + "</h3><img src=" + element.Image + "></div>";

        for (let y = 0; y < ingredients.length; y++) {
            const ingredient = ingredients[y];
            preview.innerHTML += "<li>" + ingredient + "</li>";


        }


    }}






