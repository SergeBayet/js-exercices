const readlineSync = require("readline-sync");
let shoeSize = readlineSync.question('Your shoe size? ');
let birthYear = readlineSync.question('Your birth year? ');

result = (((shoeSize * 2) + 5) * 50) - birthYear + 1766;

console.log("Magic trick after a big math calcultation : " + result);