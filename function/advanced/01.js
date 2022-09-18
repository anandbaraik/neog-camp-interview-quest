//Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

function encodeString(str, shiftBy) {
    if(!str) return `No string to shift charecter!`;
    let shiftedStr = '';
    for (let index = 0; index < str.length; index++) {
        let charCode = str[index].charCodeAt() + shiftBy;
        shiftedStr += String.fromCharCode(charCode);
    }
    return shiftedStr;
}

console.log(encodeString("neogcamp", 2));

//String.fromCharCode() : method returns a string created from the specified sequence of UTF-16 code units.

//charCodeAt() : method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.