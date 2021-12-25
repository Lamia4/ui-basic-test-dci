// Wir importieren die funktionen aus der utils.js, mit einem  sogenannten deconstructed import.
import {
    // wir übernehmen den namen den wir der funktion gegeben haben
    getTimesTwo,
    // wir können auch hier den namen ändern, mit "as"
    getTimesFour as getFour,
} from './utils.js';

class App
{
    constructor(value)
    {
        this.value = value;
    }

    createNewValue()
    {
        return {
            // wir nutzen unsere importieren funktionen
            timesTwo: getTimesTwo(this.value),
            timesFour: getFour(this.value)
        }
    }
}

// Wir nutzen den sogenannten "default export", was bedeutet das wir ein einzelnes konstrukt exportieren, 
// es ist sozusagen der default aus der datei.
export default App;
