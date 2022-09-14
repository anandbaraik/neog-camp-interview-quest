//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...

//The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1.

// Fn = Fn-1 + Fn-2
let num = 8;
let term1=0, term2=1;
let series = [term1, term2]; //first two terms of series
let nextTerm = term1 + term2;
while (nextTerm <= num) {
    series.push(nextTerm);
    term1 = term2;
    term2 = nextTerm;
    nextTerm = term1 + term2;
}

console.log(series.join(','));