const readlineSync = require("readline-sync");
let number1 = readlineSync.question('First float number? ');
let number2 = readlineSync.question('Seconde float number? ');

// integer part of the number

number1 = Math.trunc(number1);

// Multiply both of them

resultat = number1 * number2;

// Display result

console.log(number1 + " * " + number2 + " = " + resultat);