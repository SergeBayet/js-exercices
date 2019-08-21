/*
By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) t
hat returns an array of n numbers between 1 and 10.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then 
display that same number of random numbers.

The rand10() function should be reused without any modification. If there is no way to solve this 
exercise without modifying it that means you haven't followed the previous exercise's definition 
correctly.
*/

const readlineSync = require("readline-sync");

let n = readlineSync.question("How many elements do you want : ");

console.log(multiRand10(n));


/**
 * Pick a random number between 1 and 10
 * @return {number}   Random number
 */

function rand10()
{
	
	// Math.random : float between 0 and < 1
	// Multiply by 10
	// Math:floor : keep the integer part
	// We have a random number between 0 and 9. So add 1.

	return Math.floor(Math.random() * 10) + 1;
}

/**
 * Array of n element of random number
 * @param  {number} n number of elements to return
 * @return {number}   array of number
 */

function multiRand10(n)
{
	// Intialize the return value as an array
	
	let ret = [];

	// Iterate 10 times and populate the array 'ret' with random value between 1 and 10
	
	for(var i = 0; i < n ; i++)
	{
		ret[i] = rand10();
	}

	// Don't forget to return the value

	return ret;
}
