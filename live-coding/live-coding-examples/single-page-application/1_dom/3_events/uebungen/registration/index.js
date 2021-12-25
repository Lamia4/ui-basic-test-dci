const containerElements = document.getElementsByClassName("container");
let currentContainerElement = 0;
let currentContainerName;
let formInformations = {};

// Zeige die nächste seite der registrierung an
nextDiv = () =>
{
    const isValid = handleContainerValidity();

    if(isValid)
    {
        currentContainerElement++;

        handleContainer();
    }
    else
    {
        alert("Error: Some informations are missing");
    }
}

// Zeige die vorherige seite der registrierung an
previous = () =>
{
    currentContainerElement--;

    handleContainer();
}

// FÜhre container-basierende operationen aus
handleContainer = () =>
{
    handleContainerVisibility();

    currentContainerName = containerElements[currentContainerElement].id;

    if(currentContainerName === "resultDiv")
    {
        showData();
    }
}

// Entscheide über die sichtbarkeit eines containers
handleContainerVisibility = () =>
{
    for (let i = 0; i < containerElements.length; i++)
    {
        if(i === currentContainerElement)
        {
            containerElements[i].style.display = "block";
        }
        else
        {
            containerElements[i].style.display = "none";
        }
    }
}

// Entscheide über die validität eines containers
handleContainerValidity = () =>
{
    const formElements = containerElements[currentContainerElement].children;
    const validArray = [];

    for (let i = 0; i < formElements.length; i++)
    {
        if(formElements[i].tagName === "INPUT" || formElements[i].tagName === "SELECT")
        {
            const isValid = formElements[i].checkValidity();

            validArray.push(isValid);

            formInformations[formElements[i].name] = formElements[i].value;
        }
    }

    return validArray.every(check => check === true);
}

showData = () =>
{
    const resultElements = containerElements[currentContainerElement].children;

    for (let i = 0; i < resultElements.length; i++)
    {
        const result = resultElements[i];
        const id = result.id;

        switch(id)
        {
            case "nameLabel":
                result.innerText = formInformations.firstName + " " + formInformations.lastName;
                break;
            case "birthDateLabel":
                result.innerText = formInformations.birthDate;
                break;
            case "nationalityLabel":
                result.innerText = formInformations.nationality;
                break;
            case "addressLabel":
                result.innerText = formInformations.address + " " +
                                   formInformations.houseNumber + " " +
                                   formInformations.zipCode;
                break;
            case "usernameLabel":
                result.innerText = formInformations.username;
                break;
            case "passwordLabel":
                result.innerText = "*".repeat(formInformations.password.length);
                break;
            case "photoLabel":
                // C:\\fakepath\\1.png
                result.src = formInformations.imageFile.replace(
                    'C:\\fakepath\\',
                    './images/'
                );
                break;
        }
    }
}
