//Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example: Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

function reverseCharactersOfWord(sentence) {
    let sentanceArr = sentence.split(" ");
    let reversedStrWords  = sentanceArr.map((word) => {
        return word.split("").reverse().join("");
    }).join(" ");
    return reversedStrWords;
}

console.log(reverseCharactersOfWord('we are neoGrammers'));