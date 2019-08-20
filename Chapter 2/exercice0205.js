const readlineSync = require("readline-sync");
let letscontinue = true;
var value;
while(letscontinue)
{
	value = readlineSync.question("Enter your prefered value : ");
	if(value == 42)
	{
		console.log('yeah');
		letscontinue = false;
	}
	else
	{
		console.log('Are you sure??');
	}
}