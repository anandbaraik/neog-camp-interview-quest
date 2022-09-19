//Write a JavaScript program that reverses a number.
let num = 543;
let reverse = 0, remainder = 0;

while (num != 0) {
    remainder = parseInt(num % 10);
    reverse = reverse * 10 + remainder;
    num = parseInt(num/10);
}
console.log({reverse});