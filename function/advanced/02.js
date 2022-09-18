//Given a sentence, return a sentence with first letter of all words as capital.
// Example: Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

function toSentenceCase(sentence) {
    let sentenceArr = sentence.split(" ");
    let sentenceCaseStr = sentenceArr.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return sentenceCaseStr;
}

console.log(toSentenceCase('we are neoGrammers'));