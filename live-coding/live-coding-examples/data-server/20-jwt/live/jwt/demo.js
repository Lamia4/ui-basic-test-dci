const jwt = require("jsonwebtoken");

// In der Payload speichern wir die Daten, mit denen wir den User identifizieren wollen
const payload = {
    id: 123,
    name: "Erika",
    role: "Redakteure",
};

// Das Secret speichern wir bestenfalls in der Environment und darf nur dem Server zugänglich gemacht werden.
// Das Secret sorgt maßgeblich dafür, dass unser Token sicher ist.
const secret = "thnroHTN)b3tngr498otn(§§)RJnfPOAdasadsadasdsadasndfsdf";

// In den Options geben wir bspw. an, welchen Algorithmus wir verwenden wollen und wie lange der Token gültig sein wird.
const options = {
    algorithm: "HS256",
    expiresIn: "3s",
};

// Den Token erstellen wir mit der Funktion .sign()
const token = jwt.sign(payload, secret, options);

console.log({ token });

// --------------------------------------------
// Die Überprüfung des Tokens findet mittels .verify() statt. Sollte ein Fehler auftreten,
// können wir ihn in der Callback-Function abfangen und entsprechend darauf reagieren.
// Andernfalls erhalten wir die dekodierte Payload in "decoded"
jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
    if (error) return console.log({ error });

    console.log({ decoded });
});


// --------------------------------------------
// Da unser Token nur drei Sekunden gültig ist, schlägt dieser Versuch fehl:
setTimeout(() => {
    jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
        if (error) return console.log({ error });

        console.log({ decoded });
    });
}, 4000);
