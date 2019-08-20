const readlineSync = require("readline-sync");
let length;
let width;

width = readlineSync.question("Width of the rectangle : ");
length = readlineSync.question("Length of the rectangle : ");

console.log(calcSurface(width, length));


/**
 * calculate the area of a rectangle
 * @param  {number} w Width of the rectangle
 * @param  {number} l Length of the rectangle
 * @return {number}   Area of the rectangle
 */

function calcSurface(w, l)
{
	return w*l;
}