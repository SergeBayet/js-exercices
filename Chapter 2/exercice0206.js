const readlineSync = require("readline-sync");
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let day;
day = readlineSync.question("Number of the day : ");
if(day >0 && day < 8)
{
	console.log(days[day - 1]);
}
else
{
	console.log('bad number!');
}