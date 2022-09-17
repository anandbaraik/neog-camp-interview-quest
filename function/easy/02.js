//Given length of a regular hexagon, your function should return area of the hexagon.
// Example: Input: areaOfHexagon(10) ––> Output: 259.80

let side = 10;

function areaOfHexagon(side) {
    let area = ((3 * Math.sqrt(3)) / 2) * Math.pow(side, 2);
    return area.toFixed(2);
}

console.log(areaOfHexagon(side));