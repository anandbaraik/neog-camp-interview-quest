//Given a string and an index, your function should return the character present at that index in the string.
// Example:Input: charAt("neoGcamp", 4) ––> Output: c


const charAt = ((sentance, index) => {
    return sentance.charAt(index);
});

console.log(charAt("neoGcamp", 4));