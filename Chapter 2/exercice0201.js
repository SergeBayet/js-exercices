const readlineSync = require("readline-sync");
let age = readlineSync.question("Enter your age : ");
if(age >= 18)
{
	console.log("You're an adult");
}
else
{
	console.log("You're not yet an adult");
}