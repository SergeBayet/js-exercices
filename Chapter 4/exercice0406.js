/*
Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.
*/

const readlineSync = require("readline-sync");

let a = readlineSync.questionInt("Factorial of n? ");

console.log("Factorial of " + a + " is : " + factorial(a));

/**
 * Calculate the factorial of n
 * @param  {Number} n  n to calculate factorial
 * @return {Number}   factorial of n calculated recursively
 */

function factorial(a)
{
	if( a == 0 )								// It can be said that an empty set can only be ordered one way, so 0! = 1.
	{
		return 1;
	}
	else if( a < 0)							// Factorial function can only be defined with a number strictly positive
	{
		return false;
	}
	else if( a == 1 )						// Stopping condition when a = 1 we have finished to compute. 
	{
		return 1;
	}
	a = a * factorial(a - 1);
	return a;
	
}