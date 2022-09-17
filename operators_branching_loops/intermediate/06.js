//Write a Program to take a number input from user and find if the number is Prime or not.

let num = prompt("Enter a number!!!");

function isPrime(num) {
    //edge case handle
    if(num < 1) return false;

    for (let index = 2; index < num; index++) {
        if(num % index == 0) return false;
    }

    return true;
}

if (Number.isInteger(parseFloat(num))) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is not a prime number`);
    }
} else {
    console.log("Kindly enter number")
}