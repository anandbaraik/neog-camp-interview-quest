// Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *

let nols = prompt("Enter the number of lines for pattern to be printed?");

if (Number.isInteger(parseInt(nols))) {
    let pattern = "";
    for (let index = 1; index <= nols; index++) {
        for (let innerLoop = 1; innerLoop <= index; innerLoop++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
} else {
    console.log('kindly enter number.');
}