const navMenuElement = document.querySelector("nav");
let currentElement;

navMenuElement.onclick = (event) =>
{
    if(currentElement !== undefined)
    {
        toggleDropdown(currentElement);
    }
    
    currentElement = event.target;
    toggleDropdown(event.target);
}

function toggleDropdown(dropdownElement)
{
    const subMenu = dropdownElement.querySelector("ul");

    subMenu.classList.toggle("show");
    dropdownElement.classList.toggle("clicked");
}