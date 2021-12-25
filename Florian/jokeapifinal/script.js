
const mainUrl = "https://v2.jokeapi.dev/"


const inputField = document.querySelector("input");

const selectElement = document.querySelector("select");

const buttonElement = document.querySelector("button");



const results = document.querySelector(".results");

console.log(mainUrl + "categories");

async function getCategories () {

    const response = await fetch (mainUrl + "categories");
    const data = await response.json();
    
    showCategories(data);
    console.log(data);

}

function showCategories(value) {

    value.categories.map(category =>{
        const optElement = document.createElement("option");
        optElement.value = category;
        optElement.innerText = category;
        selectElement.append(optElement)
    })
}

getCategories().catch(err => console.log(err)) ;



buttonElement.addEventListener("click", getJokes)


async function getJokes() {



    const amountCategory = inputField.value;

    const selectedCategory = document.querySelector("select").selectedOptions

    console.log(selectedCategory);

    let arr = [];

    for (let i = 0; i < selectedCategory.length; i++) {
        
        arr.push(selectedCategory[i].label)
        console.log(selectedCategory[i]);
        
    }
    
    var categoriesUrl = arr.join(",");
    console.log(categoriesUrl);
    
    // for (let i = 0; i < amountCategory; i++) { //soll je nachdem, was die Zahl angibt, was rausgeben, unzwar eine categorie mit den details drin
        
        
        const response = await fetch(mainUrl + `joke/${categoriesUrl}?amount=${amountCategory}`);
        
        const data = await response.json();
        
        console.log("Wichtig", data);
        
        manipulateData(data, amountCategory)
        
       
        
        
    // }

}

function manipulateData(data, amountCategory) { //wegen Fehler bei 1, es wird als String gegeben die Zahl, deswegen muss man wieder in eine number umwandeln

    // console.log(parseInt(amountCategory));
    // console.log(typeof parseInt(amountCategory));


    if(parseInt(amountCategory) === 1) { //string muss als number stehen, sonst erkennt er es nicht

        displayData(data);

    }

    else if(parseInt(amountCategory) >1){
        
        
        data.jokes.map(joke => {

            
            displayData(joke);
            
        })
    }
    
    
}


function displayData(entry){


    const p1 = document.createElement("p");
    
    const p2 = document.createElement("p");
    const h2Category = document.createElement("h2");
    
    
    if(entry.type === "twopart") {
    
    
        // console.log(data);
        
    
        p1.innerHTML = "Question : " + entry.setup;
        p2.innerHTML = "Answer : " + entry.delivery;
        h2Category.innerHTML= entry.category;
        
        results.appendChild(h2Category);
        results.appendChild(p1);
        results.appendChild(p2);
    
        // console.log(ulElement);
    
    } else if (entry.type === "single") {
    
       
    
        p1.innerText =  "Joke : " + entry.joke;
        h2Category.innerText = entry.category;
        results.appendChild(h2Category, p1);
        results.appendChild(p1);
        
    }

}
