/*
* Write a program to find the maximum and minimum out of two given numbers. The numbers are 
* num1=129 and num2=251.
*/
let num1 = 129;
let num2 = 251;

function isMaxNum(num1, num2) {
    let info = (num1 > num2) ? `${num1} is maximum & ${num2} is minimum.` : `${num2} is maximum & ${num1} is minimum.`;
    console.log(info);
}

isMaxNum(num1, num2);

//mehod 2
console.log(`Max: ${Math.max(129,251)}`);
console.log(`Min: ${Math.min(251,129)}`);