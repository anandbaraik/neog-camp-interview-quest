//Given a and b, your function should return the value of a^b
// Example:
// Input: power(2,3) ––> Output: 8

let a = 2, b = 4;

function power(a, b) {
    //method 1
    let pow = Math.pow(a, b);
    
    //method 2
    let powvalue = 1;
    while(b > 0) {
        powvalue *= a;
        b--;
    }
    return powvalue;
}

console.log(power(a, b));