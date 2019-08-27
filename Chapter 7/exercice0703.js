/*
Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

Examples:

    7 => nothing (it's a prime number)
    10 => 2 5
    9187 => nothing (it's a prime number too)
    134234 => 2 41 82 1637 3274 67117

*/

const readlineSync = require("readline-sync");

n = readlineSync.questionInt("Enter an integer : ");
results = [];
for(var i = 2; i< n ; i++)
{
	if(n % i == 0)
	{
		results.push(i);
	}
}
if(results.length == 0)
{
	console.log("Primary number!")
}
else
{
	console.log(results.join(' ; '));
}