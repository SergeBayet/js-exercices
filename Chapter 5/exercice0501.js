/*
Create a function named askTvSerie() that will ask the user for the following data about its 
favorite TV serie:

    Name
    Production year
    Names of the cast members (there can be as much as the user want)

That function must gather all the data in a single object and return it. The data structure must 
be elegant.

Create a program that use that function to generate a TV serie object and display it to the user 
in JSON format.
*/

const readlineSync = require("readline-sync");

console.log(askTvSerie());

/**
 * Create an object tvSerie asking the user to enter the different informations
 * 
 * @return {Number}   tvSerie object
 */

function askTvSerie()
{
	// Initialize the tvSerie object

	let tvSerie = {
		'name' : '',
		'production year' : '',
		'cast members' : []
	}

	// Populate the name of the serie

	tvSerie['name'] = readlineSync.question("Name of the serie? ");
	
	// Populate the production year
	
	tvSerie['production year'] = readlineSync.question("Production year of the serie? ");
	
	// Ask the names of the cast members. When the answer is empty : stop the loop.
	
	let letsContinue = true;
	while(letsContinue)
	{
		
		let castMember = readlineSync.question("Name of a cast member (hit empty line to terminate)? ");
		
		if(castMember == '')
		{
			// If no cast member specified, exit the loop
			letsContinue = false;
		}
		else
		{
			// add the cast member at the end of the array 'cast members'
			tvSerie['cast members'].push({'name': castMember});
		}
	}

	// return the object tvSerie

	return tvSerie;

}