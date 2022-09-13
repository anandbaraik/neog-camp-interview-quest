//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17

// Method 1
for (let num = 1; num <= 100; num++) {
    if((num % 3 == 0) && (num % 5 == 0)) {
        console.log("FizzBuzz");
    }else if(num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// Method 2
let output = "";
for (let num = 1; num <= 100; num++) {
    if((num % 3 == 0) && (num % 5 == 0)) {
        output += "FizzBuzz, ";
    }else if(num % 3 == 0) {
        output += "Fizz";
    } else if (num % 5 == 0) {
        output += "Buzz, ";
    } else {
        output += `${num}, `;
    }
}

console.log(output);