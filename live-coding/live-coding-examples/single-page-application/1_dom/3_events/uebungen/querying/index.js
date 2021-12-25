// Change font style of body
const bodyElement = document.querySelector("body");
       // in css: font-family: "Arial";
bodyElement.style.fontFamily = "Arial";

// Style the title
const titleElement = document.querySelector(".title");
        // in css: text-align: center;
titleElement.style.textAlign = "center";

// Style the section main
const mainSectionElement = document.querySelector(".main");

              // in css: display: flex;
mainSectionElement.style.display = "flex";
              // in css: flex-flow: row wrap;
mainSectionElement.style.flexFlow = "row wrap";
              // in css: justify-content: space-around;
mainSectionElement.style.justifyContent = "space-around";
              // in css: box-sizing: border-box;
mainSectionElement.style.boxSizing = "border-box";

// if(window.innerWidth < 700)
// {
//                   // in css: flex-direction: column;
//     mainSectionElement.style.flexDirection = "column";
//                   // in css: width: 200px;
//     mainSectionElement.style.width = "200px";
//                   // in css: margin: 0 auto;
//     mainSectionElement.style.margin = "0 auto";
// }

// change style of menu headings
// The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.

const menuCategoryElements = document.querySelectorAll(".category");
// console.log(menuCategoryElements)
menuCategoryElements.forEach(({ style: category }) =>
{
    // in css: font-style: italic;
    category.fontStyle = "italic";
    // in css: font-size: 2rem;
    category.fontSize = "2rem";
    // in css: border-bottom: 1px solid black;
    category.borderBottom = "1px solid black";
});

// Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
function colorGenerator()
{
    // #0000F9
    const hexLetters = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
        randomColor += hexLetters[Math.floor(Math.random() * 16)];
        // randomColor = #A
        // randomColor = #A2
        // randomColor = #A2E
        // randomColor = #A2EC
        // randomColor = #A2EC0
        // randomColor = #A2EC05
    }

    return randomColor + "50"; // #A2EC0550
}

const foodCategoryElements = document.querySelectorAll(".food-category");
foodCategoryElements.forEach(({ style: category }) =>
{
    // in css: background-color: 
    category.backgroundColor = colorGenerator(); // "#A2EC0550"
    // in css: min-width: 300px;
    category.minWidth = "300px";
    // in css: text-align: center;
    category.textAlign = "center";
    // in css: padding: 1rem;
    category.padding = "1rem";
    // in css: border-radius: 5px;
    category.borderRadius = "5px";
});

// Select the warning at the end of the page by its id warning. Select the id without using a querySelector. Change the size and font of the warning.
const warning = document.getElementById("warning");
warning.style.fontSize = "55px";
warning.style.fontFamily = "Times";

// Select all even allergy-info items. Give the even items a different background color.
const allergyInfoElements = document.querySelectorAll(".allergy-info:nth-child(even)");
allergyInfoElements.forEach(({ style: element }, i) =>
{
    // in css: background-color: blue;
    element.backgroundColor = colorGenerator();
});

// The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
const footerElement = document.querySelector(".footer");
         // in css: display: flex;
footerElement.style.display = "flex";
        // in css: flex-flow: row wrap;
footerElement.style.flexFlow = "row wrap";
        // in css: justify-content: center; 
footerElement.style.justifyContent = "center";

const descriptionElements = document.querySelectorAll(".food-desc");
descriptionElements.forEach(({ style: description }) =>
{
     // in css: border: 5px solid tomato;
    description.border = "5px solid " + colorGenerator();
    // in css: border-radius: 100%;
    description.borderRadius = "100%";
    // in css: height: 100px;
    description.height = "100px";
    // in css: width: 100px;
    description.width = "100px";
    // in css: margin: 10px;
    description.margin = "10px";
    // in css: display: flex;
    description.display = "flex";
    // in css: justify-content: center;
    description.justifyContent = "center";
    // in css: align-items: center;
    description.alignItems = "center";
});
