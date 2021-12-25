const navMenuElement = document.querySelector("nav");
let currentElement;

navMenuElement.onclick = (event) =>
{
    if(currentElement !== undefined)
    {
        toggleDropdown(currentElement);
    }

    currentElement = event.target;

    toggleDropdown(currentElement);
}

function toggleDropdown(dropdownElement)
{
    const subMenu = dropdownElement.querySelector("ul");

    subMenu.classList.toggle("show");
    dropdownElement.classList.toggle("clicked");
}

/*
currentElement = nichts;
Ich klicke auf The Prestige ( 1 klick ):
gibt es currentElement ? nein
currentElement wird zu dem aktuellen element
das aktuelle element wird getogglet

ich klicke auf Inception ( 2. klick ):
gibt es currentELement? JA => das currentElement wird getoggled
currentElement wird zum aktuellen element
das aktuelle element wird getogglet
*/
