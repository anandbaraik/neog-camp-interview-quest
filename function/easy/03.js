//Given a sentence, your functions should return the number of words in the sentence.
// Example:Input: noOfWords(We are neoGrammers) ––> Output: 3

let sentence = "We are     neoGrammers";

let wordsArr = sentence.split(" ").filter((word) => (word.length));

console.log(`no. of words in "${sentence}" are ${wordsArr.length}`);