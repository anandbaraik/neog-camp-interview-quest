/*
* Write a program to add 5 numbers. The value of numbers are 
* num1=5, num2=13, num3=7, num4=21 and num5=48
*/

/*
* Method 1
*/ 
let num1 = 5, num2 = 13, num3 = 7, num4 = 21, num5 = 48;

let sum1 = num1+num2+num3+num4+num5;
console.log({sum1});

/*
* Method 2
*/ 
let numArr = [5, 13, 7, 21, 48];
let sum2 = 0;
numArr.forEach(num => {
    sum2 += num;
});
console.log({sum2});

/*
* Method 3
*/ 
let numArr1 = [5, 13, 7, 21, 48];
sum3 = numArr1.reduce((total, num) => total+num);
console.log({sum3});

/*
* Note
* ============
* 1) forEach : [array.forEach(function(currentValue, index, arr),
* thisValue)] => calls a function for each element in an array 
* & acts on it. return `undefined` 
*
* 2) reduce : [array.reduce(function(total, currentValue
* currentIndex, arr), initialValue)] => retuns a single value
* reducing an array. return `value`
*/