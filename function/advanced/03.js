//Given an array of numbers, your function should return an array in the ascending order.
// Example: Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

function sortArray(arr) {
    //method 1
    // let sortedArr = arr.sort((a, b) => a - b);
    // return sortedArr;
    
    //method 2
    let temp = undefined;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([100,83,32,9,45,61]));