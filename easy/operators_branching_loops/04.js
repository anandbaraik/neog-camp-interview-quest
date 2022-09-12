/*
* Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23
* and num3=17.
*/

let num1 = 8, num2 = 23, num3 = 17;
let arr = [num1, num2, num3];
//Method 1 
let max = 0;
for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
        max = arr[index];
    }
}
console.log({max});

//Method: rest operator => The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
const findMaxNum = (...nums) => {
    let max = 0;
    nums.forEach(num => {
        if(num > max) {
            max = num;
        }
    });
    console.log({max});
}

findMaxNum(...arr);