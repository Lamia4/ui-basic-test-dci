
const useState = (value) =>
{
    let returnValue = value;

    const setState = (newValue) =>
    {
        returnValue = newValue;
    }

    return [ returnValue, setState ];
}

const [ isValid, setIsValid ] = useState(false);

console.log(isValid);

setIsValid(true);

console.log(isValid);


























// class React
// {
//     value;

//     constructor()
//     {
//         this.value;

//         this.handleChanges = this.handleChanges.bind(this);
//     }

//     handleChanges(newValue)
//     {
//         this.value = newValue;
//     }

//     useState(value)
//     {

//         this.value = value;

//         return [ this.value, this.handleChanges ]
//     }
// }

// const react = new React();

// const [ isValid, setIsValid ] = react.useState(false);

// console.log(isValid);

// react[setIsValid(true)];

// console.log(isValid);

// console.log(react.value);