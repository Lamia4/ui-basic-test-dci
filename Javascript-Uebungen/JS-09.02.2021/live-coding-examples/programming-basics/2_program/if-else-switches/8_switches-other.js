// Erweiterter switch der mit true aktiviert wurde und dann innerhalb des cases prüft:
const count = 4;

switch (true) {
    case (count >= 4):
        console.log("Erstes case");
        break;
    case (count > 3):
        console.log("Zweites case");
        break;
    case (count == 2):
        console.log("Drittes case");
        break;
}