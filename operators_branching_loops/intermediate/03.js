//Write a program to take a number input from user and print multiplication table 12 times for that number.

let num = prompt("Enter number?");

if (Number.isInteger(parseInt(num))) {
    for (let index = 1; index <= 12; index++) {
        console.log(`${num} X ${index} = ${num * index}`);
    }
} else {
    console.log('kindly enter number.');
}