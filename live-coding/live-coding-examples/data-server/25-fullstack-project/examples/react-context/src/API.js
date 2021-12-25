import axios from "axios";

// Damit wir unsere API Calls übersichtlich halten können, legen wir diese API.js an.
// Hier werden sämtliche Calls als Funktionen exportiert.
// So erreichen wir eine bessere Wartbarkeit:
// Man muss bspw. nicht mehr die Komponenten ändern, wenn sich die URL ändert oder die Aufrufe anders strukturiert werden müssen.
// Zudem können wir die Aufrufe in den Komponenten vereinfachen, indem wir lediglich die notwendigen Parameter übergeben.
const baseUrl = "http://localhost:4444";

export const getProducts = () => {
    return axios.get(`${baseUrl}/products`)
        .then(response => response.data)
        .catch(error => console.log(error));
};

export const createProduct = (name, articleNo, description, price) => {
    // return axios.post(`${baseUrl}/products`, {
    //     name,
    //     articleNo,
    //     description,
    //     price,
    // });
};
