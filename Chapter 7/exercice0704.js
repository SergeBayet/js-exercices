/*
Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

Examples:

    7 => nothing (it's a prime number)
    10 => 2 5
    9187 => nothing (it's a prime number too)
    134234 => 2 41 82 1637 3274 67117

*/

const readlineSync = require("readline-sync");
var continueLoop = true;
pizzaFlavors = getPizzaFlavors();
while(continueLoop)
{
	console.log("Hello! Welcome to the Pizza Flavors Manager.\n" +
							"Please choose your actions:\n\n" +
							"1 - List all the pizza flavors\n" +
							"2 - Add a new pizza flavor\n" +
							"3 - Remove a pizza flavor\n" +
							"4 - Exit this program\n");
	n = readlineSync.questionInt("Enter your action's number : ");

	

	switch (n) {
		case 1:
			list(pizzaFlavors);
			break;
		case 2:
			pizzaFlavors.push(addPizza());
			list(pizzaFlavors);
			break;
		case 3:
			i = readlineSync.question("Number of the flavor to remove : ");
			if(i>=0 && i< pizzaFlavors.length)
			{
				pizzaFlavors.slice(i,1);
			}
			break;
		case 4:
			savePizzaFlavors(pizzaFlavors);
			continueLoop = false;
			break;
	}
}
function savePizzaFlavors(pizzas) {
	var fs = require('fs');

	
	fs.writeFile("flavors.txt", pizzas, function(err) {
		if(err) {
						console.log(err);
			} 
			else {
				console.log("Pizzas saved");
				}
		});  
	
}
function getPizzaFlavors() {
	var fs = require('fs');
	pizzas = fs.readFileSync('flavors.txt').toString().split(",");

	return pizzas;
}
function addPizza() {
	return readlineSync.question("New flavour : ");
}
function list(el)
{
	if(el.length == 0)
	{
		console.log("None");
	}
	else {
		console.log(el);
	}
	
}
