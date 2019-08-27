/*
Make a program that generates an integer between 1 and 100 (don't display it to the user).

Make a program that asks for an integer n and generates the n first Fibonacci numbers.

Yes, you'll have to search what the hell are Fibonacci numbers.
*/

const readlineSync = require("readline-sync");

n = readlineSync.questionInt("n value of the Fibonacci suite : ");

var currentNumber = 1;
var previousNumber = 1;
var a;
console.log(previousNumber);
console.log(currentNumber);
for(var i = 1; i<= n-2; i++)
{
	a = currentNumber + previousNumber;
	previousNumber = currentNumber;
	currentNumber = a
	console.log(a);
	
}
