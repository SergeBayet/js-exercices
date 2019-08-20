const readlineSync = require("readline-sync");
let number1 = readlineSync.question('First integer number? ');
let number2 = readlineSync.question('Seconde integer number? ');

// Rest of the integer division

rest = number1 % number2;

// Display reslut

console.log("Rest of the integer division : " + rest);