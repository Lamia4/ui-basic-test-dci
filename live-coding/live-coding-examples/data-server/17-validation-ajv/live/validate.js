import Ajv from "ajv";
import ajvErrors from "ajv-errors";
// Wir erstellen ein neues Objekt des Ajv JSON Validators
const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });
// Durch den Aufruf ajvErrors() mit dem o.g. Objekt können wir die auftretenden Fehler auslesen
ajvErrors(ajv);

// Das ist unsere "Eingabe", also das JSON-Konstrukt, das wir überprüfen wollen
const airports = [
  {
    "code": "AOC",
    "lat": "50.9794",
    "lon": 12.5111,
    "name": "Altenburg Nobitz",
    "city": "Altenburg",
    "state": "Thuringia",
    "country": "Germany",
    "woeid": 12597007,
    "tz": "Europe/Berlin",
    "phone": "",
    "type": "Airports",
    "email": "",
    "url": "http://www.flughafen-altenburg.de",
    "runway_length": 2235,
    "elev": 641,
    "icao": "EDAC",
    "direct_flights": 2,
    "carriers": 1
  },
  {
    "code": "BRE",
    "lat": 53.0523,
    "lon": 8.78533,
    "name": "Bremen Airport",
    "city": "Bremen",
    "state": "Bremen",
    "country": "Germany",
    "woeid": 22177393,
    "tz": "Europe/Berlin",
    "phone": "+49 421 5595-0",
    "type": "Airports",
    "email": "",
    "url": "http://www.airport-bremen.de",
    "runway_length": 6673,
    "elev": 13,
    "icao": "EDDW",
    "direct_flights": 38,
    "carriers": 27
  }
];

// In diesem Schema beschreiben wir den Aufbau der Daten.
// Wir können den Aufbau so allgemein oder so genau beschreiben, wie wir wollen.
const schema = {
    type: "array",
    items: {
        type: "object",
        additionalProperties: true, // Setzen wir diesen Wert auf false, dürfen keine weiteren Properties vorhanden sein als die, die hier im Schema beschrieben werden
        required: ["code", "lat", "lon"], // Ist mindestens eine als "required" gelistete Property nicht vorhanden, führt das zu einem Fehler
        properties: {
            code: {
                type: "string",
                minLength: 3,
                maxLength: 3,
            },
            lat: {
                type: "number"
            },
            lon: {
                type: "number"
            },
            name: { // optional, da nicht in "required" aufgeführt. Wenn es in den Daten aber vorhanden ist, muss es vom Typ "string" sein
                type: "string",
            },
            city: { // optional, da nicht in "required" aufgeführt. Wenn es in den Daten aber vorhanden ist, muss es vom Typ "string" sein
                type: "string",
            },
        }
    }
};

// Mit der Funktion compile() lesen wir das Schema ein.
// Wir erstellen somit einen Testfall, mit dem wir die Daten prüfen und Fehler ausgeben lassen können.
const test = ajv.compile(schema);

// Wir rufen den Test mit den Daten auf.
// Das Ergebnis ist ein Boolean, der uns mitteilt, ob die Daten dem Schema folgen oder nicht.
const result = test(airports);

// Durch das Modul ajv-errors bekommen wir viele nützliche Informationen zu den Fehlern heraus,
// auf die wir über test.errors zugreifen können.
console.log(result, test.errors);
