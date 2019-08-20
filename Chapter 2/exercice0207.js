const readlineSync = require("readline-sync");
let n;
let m = 0;
n = readlineSync.question("Number of entries : ");

for(var i = 1; i <= n ; i++)
{
	m += parseInt(readlineSync.question("Number #" + i + " : "));
}
console.log("Result : " + m);