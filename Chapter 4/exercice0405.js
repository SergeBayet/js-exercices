/*
Create a function named calcDistance which takes the coordinates of two different points A and B in 
a 2D space. That function must return the distance between those two points.

Examples results:

    Point A = [1, 1], point B = [2, 2] => 1.41
    Point A = [1, 1], point B = [3, 1] => 2
    Point A = [4, 1], point B = [1, 1] => 3
    Point A = [-2, 2], point B = [2, -2] => 5.65

Create a program to use that function.

Write a documentation for the calcDistance function.

Hint: You probably need to make some search on Google to learn the mathematical formula to do that. 
You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...
*/
const readlineSync = require("readline-sync");

// Fix the coordinates of two points to its origin. Each point is defined by an object with x and y 
// coordinates

let pointA = {'x':0, 'y':0};
let pointB = {'x':0, 'y':0};

// Ask for the coordinates.

pointA.x = readlineSync.question("Coordinate X of point A : ");
pointA.y = readlineSync.question("Coordinate Y of point B : ");
pointB.x = readlineSync.question("Coordinate X of point A : ");
pointB.y = readlineSync.question("Coordinate Y of point B : ");

console.log(pointA);
console.log(pointB);
console.log("Distance between the 2 points : " + calcDistance(pointA, pointB));

/**
 * Calculate the distance between two points in 2D
 * @param  {Point object} coordinateA  coordinates x and y of first point
 * @param  {Point object} coordinateB  coordinates x and y of second point
 * @return {Float}   distance between the two points
 */

function calcDistance(coordinateA, coordinateB)
{
	// First calculate the distance horizontal between the two coordinates.

	let distHorizontal = coordinateB.x - coordinateA.x;
	
	// Secondly, calculate the distance vertical between the two coordinates.
	
	let distVertical = coordinateB.y - coordinateA.y;

	// Add the square value of the both distances and then take the square root of the equation
	
	let distance = Math.sqrt(Math.pow(distHorizontal, 2) + Math.pow(distVertical, 2));
	
	// Sources :
	// Calculate distance : https://www.wikihow.com/Find-the-Distance-Between-Two-Points
	// Math.pow : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/pow
	// Math.sqrt : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt

	// Return the value

	return distance;
}