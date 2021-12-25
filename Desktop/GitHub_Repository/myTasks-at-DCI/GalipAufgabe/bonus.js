

const array = [5,12,15,22,12,20,22,22,12,6,5,22];

let counter = 0;
let resultObj = {};
for (i of array){
    if(resultObj[i] === undefined){
        resultObj[i] = 1;
    }
    else{
        resultObj[i] +=1;
    } 
}
for (a of Object.values(resultObj)){
    let b = Math.floor(a/2);
    if (b > 0){
        counter+=b
    }
}

const numbers = [5, 12, 15, 22, 12, 20, 22, 22, 12, 6, 5, 22];
numbers.sort();
let counter = 0;
console.log(numbers);
for (let i = numbers.length; i > 0;) {
    if (numbers[0] === numbers[1]) {
        counter += 1;
        numbers.shift();
        i--
        numbers.shift();
        i--
    } else if (numbers[0] !== numbers[1]) {
        numbers.shift();
        i--
    } else {
        console.log("sen ne yapiyorsun");
    }
}
