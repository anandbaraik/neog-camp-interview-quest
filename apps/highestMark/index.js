// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?
//https://replit.com/@anandbaraik/HighestANDaverageMarks#index.js
var readlineSync = require("readline-sync")

var students = [];
var highestMarkAchiever = {};

for (var i = 0; i < 5; i++) {
  console.log("Enter details of student", i + 1, ":");
  let details = {};
  details.name = readlineSync.question("Name: ");
  details.unitMarks = parseInt(readlineSync.question("Unit Marks: "));
  details.preFinalMarks = parseInt(readlineSync.question("Pre Final Marks: "));
  details.finalMarks = parseInt(readlineSync.question("Final Marks: "));
  students.push(details);
  console.log("-----------")
}

// result
let highest = 0;
for (var i = 0; i < 5; i++) {
  var sum = (students[i].unitMarks + students[i].preFinalMarks + students[i].finalMarks);
  var avg = sum / 3;
  students[i].avgMarks = avg.toFixed(2);
  students[i].marks = sum;
  if(highest < sum) {
    highestMarkAchiever = students[i];
  }
}

console.log(`${highestMarkAchiever.name} has the highest marks of all. secured ${highestMarkAchiever.marks}`);

console.log("-----------")

console.log("Average Marks of all students are:")
students.forEach((student) => {
    console.log(`${student.name} has ${student.avgMarks}`);
});