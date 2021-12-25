const formEle = document.querySelector("form")

const inputField = document.querySelector("input")

const ulAllPokemon = document.querySelector("#pokedex");

const mainUrl = "https://pokeapi.co/api/v2/";

async function getPokemonGeneration() {

    const response = await fetch(mainUrl + "generation/1");
    const data = await response.json();
    console.log(data);

    // const pokemon = data.pokemon_species.map((pokeMan, index) => ({

    //     ...pokeMan,
    //     id : pokeMan.index +1,
    //     name: pokeMan.name
    // }))

    // console.log("obj", pokemon);

    everyPokemon(data);
}

getPokemonGeneration();


var arrOfPokemon = [];

function everyPokemon(data) {


    for (let i = 0; i < data.pokemon_species.length; i++) {


        const li = document.createElement("li");
        li.classList.add("card");
        li.innerHTML = `<img height=200 src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png><h2>${i+1}. ${(data.pokemon_species[i].name).toUpperCase()}</h2>`
        ulAllPokemon.appendChild(li);

        li.addEventListener("click", showDetails)

        arrOfPokemon.push(li);

        // console.log(i+1);

    }
    console.log(arrOfPokemon);
    return arrOfPokemon
}

// arrOfPokemon.map(pokemon => {

//     pokemon.addEventListener("click", showDetails)

// })

function showDetails(e) {

    inputField.style.display = "none";



    arrOfPokemon.map(entry => {

        entry.style.display = "none";


        // console.log("hier kommen die details");
    })

    formEle.innerHTML = `<button id="nextBtn">Prev</button><button id="nextBtn">Next</button>`;
    ulAllPokemon.innerHTML = `<div class="card"></div>`;

    showDetailCard(e);

}

function showDetailCard() {


}

async function getPokemon() {

    const response = await fetch(mainUrl + "pokemon/1"); 
    const pokemonDetails = await response.json();
    console.log("mal sehn", pokemonDetails);

    
    
}


getPokemon();
