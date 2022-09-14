// // Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

let num = prompt("Enter a num");

if (Number.isInteger(parseInt(num))) {
    function factorial(n) {
        if(n <= 1) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(num));
} else {
    console.log("kindly enter a number");
}