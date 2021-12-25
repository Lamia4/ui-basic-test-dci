
// Wir können properties auch sonderzeichen geben, dafür geben wir sie als String ein.
const testObject =
{
    "ist fahrbereit": true,
    "hallo!": [ "ersterEintrag", "zweiterEintrag" ],
    isAdmin: false
}

// Hier ist es zwingend notwendig das wir die [] pattern nutzen, um die property anzusprechen.
console.log(testObject["ist fahrbereit"]);
console.log(testObject["hallo!"][0]);

