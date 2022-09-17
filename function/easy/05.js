//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

function typeOfTriangle(a, b, c) {

    if((a+b+c) != 180){
        return "does not forming triangle.";
    }

    //Three equal angles, always 60°
    if ((a == b) && (a == c)) {
        return "forming equilateral triangle";
    }

    //Two equal angles
    if ((a == b) || (b == c) || (a == c)) {
        return "forming isosceles triangle";
    }

    //No equal angles
    if (a != b) {
        return "forming scalene triangle";
    }
}

console.log(typeOfTriangle(30, 60, 90));