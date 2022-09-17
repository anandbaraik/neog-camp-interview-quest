//Write a program to take a day as an input and determine whether it is a weekday or weekend. `Example: Tuesday is weekday.`

let weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let weekEnds = ["saturday", "sunday"];

let day = prompt("Enter day? (Ex:monday)");

function checkDay(day) {
    if (weekDays.includes(day)) {
        console.log(`${day.toUpperCase()} is a weekday!`);
    } else if (weekEnds.includes(day)) {
        console.log(`${day.toUpperCase()} is a weekend!`);
    } else {
        console.log(`Enter correct day.`);
    }
}

checkDay(day.toLocaleLowerCase());