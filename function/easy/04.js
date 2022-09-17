//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

function findMin(...nums) {
    //method 1
    // return Math.min(...nums);
    let min = nums[0];
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] < min) {
            min = nums[index];
        }
    }
    return min;
}

console.log(findMin(3,5));
console.log(findMin(3,5,9,1));