array = [2, 1, 5]

function findArray(arr)  {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
}

console.log(findArray(array));