var arrayA = [2, 5, 3, 1];


function findSmaller (array) {
    var resultArray = [];
    for (let i = 0; i < array.length; i++) {
        var sum = 0;
        for (let j = i+1; j < array.length; j++) {
            if(array[i]> array[j]){
                sum += 1;
            };
            
        }
        
        resultArray.push(sum);
    }
    
    return resultArray;
}

console.log(findSmaller(arrayA));