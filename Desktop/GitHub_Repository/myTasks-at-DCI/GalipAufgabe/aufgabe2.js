

array1 = [3, 2, 1, 1];

function findArray (arr) {
    
    var newArr =[];

    for (let i = 0; i < arr.length; i++) {
        let temp = 1;


        for (let j = 0; j < arr.length; j++) {
            if ( i == j) {
                continue
            } else {
                temp *= arr[j]
            };
            
        }
    newArr.push(temp);
    }
    return newArr;
    
};

console.log(findArray(array1));