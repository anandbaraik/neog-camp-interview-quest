//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

let monthWith31Days = ["january", "march", "may", "july", "august", "october", "december"];

let month = prompt("Enter Month Name (Ex:january)");

function checkIfMonthHas31Days(month) {
    monthWith31Days.includes(month) ? console.log(`${month} has 31 days!`) : console.log(`${month} does not have 31 days!`);
}

checkIfMonthHas31Days(month.toLocaleLowerCase());