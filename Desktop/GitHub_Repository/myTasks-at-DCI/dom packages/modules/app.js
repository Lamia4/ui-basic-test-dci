
import {

    getTimesTwo,
    getTimesFour as getFour 

} from './utils.js';


class App {

    constructor(value) {

        this.value = value;
    }

    createNewValue() {

        return {
            timesTwo: getTimesTwo(this.value),
            timesFour: getFour(this.value)
        }

    }
}


export default App;