
const today = "Samstag";

switch(today)
{
    case "Montag":
        console.log("Heute ist Montag");
        break;
    case "Dienstag":
        console.log("Heute ist Dienstag");
        break;
    case "Mittwoch":
        console.log("Heute ist Mittwoch");
        break;
    case "Donnerstag":
        console.log("Heute ist Donnerstag");
        break;
    case "Freitag":
        console.log("Heute ist Freitag");
        break;
    case "Samstag":
        console.log("Heute ist Samstag");
        break;
    case "Sonntag":
        console.log("Heute ist Sonntag");
        break;
}

// Fragen ob es Wochenende ist, oder nicht
switch(today)
{
    case "Montag":
    case "Dienstag":
    case "Mittwoch":
    case "Donnerstag":
    case "Freitag":
        console.log("Kein Wochenende");
        break;
    case "Samstag":
    case "Sonntag":
        console.log("Wochenende!");
        break;
}

switch(today)
{
    case "Samstag":
    case "Sonntag":
        console.log("Wochenende!");
        break;
    default:
        console.log("Kein Wochenende");
}

// -------------------------------------------------------------------
// Equivalent zu:
if(
    today === "Montag" || 
    today === "Dienstag" || 
    today === "Mittwoch" || 
    today === "Donnerstag" || 
    today === "Freitag"
)
{
    console.log("Kein Wochenende");
}
else if(today === "Samstag" || today === "Sonntag")
{
    console.log("Wochenende!");
}

// Oder kürzer:
if(today === "Samstag" || today === "Sonntag")
{
    console.log("Wochenende!");
}
else
{
    console.log("Kein Wochenende");
}