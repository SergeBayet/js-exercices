/*
Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the 
minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum 
element.

Create a program that asks a number to the user then generate that same amount of random numbers but 
also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created.

The multiRand(n) function should be reused without any modification. If there is no way to solve this 
exercise without modifying it that means you haven't followed the previous exercise's definition 
correctly.
*/

const readlineSync = require("readline-sync");

let n = readlineSync.question("How many elements do you want : ");
let randomNumbers = [];

randomNumbers = multiRand10(n);
console.log('Numbers : ' + randomNumbers);
console.log('Average : ' + average(randomNumbers));
console.log('Minimum value : ' + min(randomNumbers));
console.log('Maximum value : ' + max(randomNumbers));

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

/**
 * Return average of an array of numbers
 * @param  {array} arr array of numbers
 * @return {number}    average
 */

function average(arr)
{
	
	// Initialize nElements with the number of elements of the array
	
	let nElements = arr.length;
	
	// If there is no element return false

	if(nElements == 0) return false;

	// initialize the return value to 0

	let average = 0;

	// Iterate through the array to add all the numbers

	for(let elem of arr)
	{
		average += elem;
	}

	// Then divide the results by the number of elements

	average /= nElements;

	// Return the result

	return average;
}

/**
 * Return the minimum value of an array of numbers
 * @param  {array} arr array of numbers
 * @return {number}    minimum value
 */

function min(arr)
{
	// Initialize 'min' with the highest value possible
	// source : https://www.wikitechy.com/tutorials/javascript/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losing-precision
	
	let min = Number.MAX_SAFE_INTEGER;

	// Iterate through the array

	for(let elem of arr)
	{
	
		// if the element is less than min, change the minimum value to it.
	
		if(elem < min)
		{
			min = elem;
		}
	}

	// Return the minimum value

	return min;
}

/**
 * Return the maximum value of an array of numbers
 * @param  {array} arr array of numbers
 * @return {number}    maximum value
 */

function max(arr)
{
	// Initialize 'max' with the lowest value possible
	
	let max = Number.MIN_SAFE_INTEGER;

	// Iterate through the array

	for(let elem of arr)
	{
	
		// if the element is greater than max, change the maximum value to it.
	
		if(elem > max)
		{
			max = elem;
		}
	}

	// Return the maximum value

	return max;
}