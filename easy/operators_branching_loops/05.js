//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num1 = 35, num2 = 29, num3 = 46;
let arr = [num1, num2, num3];

//Method: rest operator => The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
const findMinNum = (...nums) => {
    let min = nums[0];
    nums.forEach(num => {
        if(num < min) {
            min = num;
        }
    });
    console.log({min});
}

findMinNum(...arr);