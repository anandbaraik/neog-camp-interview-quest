//Given two arrays, your function should return single merged array.
// Example:Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function mergeArray(arr1, arr2) {
    let arr3 = [];
    if(Array.isArray(arr1)) {
        arr3.push(...arr1);
    }

    if(Array.isArray(arr2)) {
        arr3.push(...arr2);
    }

    return arr3;
}

console.log(mergeArray([1,3,5], [2,4,6]));