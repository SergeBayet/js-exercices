const readlineSync = require("readline-sync");

let min = readlineSync.question("Enter a minimum value : ");
let max = readlineSync.question("Enter a maximum value : ");
let current = readlineSync.question("Enter the current value : ");

if(min > max)
{
	console.log("Are you kidding me?");
}
else
{
	if(current >= min && current <= max)
	{
		console.log("The number is in the range");
	}
	else
	{
		console.log("Sorry but the number is out of range!")
	}
}
