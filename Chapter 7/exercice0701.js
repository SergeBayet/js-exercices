/*
Make a program that generates an integer between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the user to guess. If the user 
enters a number which is too low it should display "Too low" and re-ask the question. If the 
user enters a number which is too high it should display "Too high" and re-ask the question. 
If the user guess correctly it should display "Well guessed!" and exit.
*/

const readlineSync = require("readline-sync");

var max = 100;
var min = 1;
var numberToGuess = Math.floor(Math.random() * (+max - +min)) + +min; 

var continueLoop = true;
var guessed;
while (continueLoop) {
	guessed = readlineSync.questionInt("Guess the number : ");
	if(guessed < numberToGuess)
	{
		console.log("Too low!");
	}
	else if(guessed > numberToGuess)
	{
		console.log("Too high!")
	}
	else
	{
		console.log("Good guess!!");
		continueLoop = false;
	}
}