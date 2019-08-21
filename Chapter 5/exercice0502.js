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

let tvSerie = (askTvSerie());
console.log('Object TV Serie : ');
console.log(tvSerie);
let randomizedCast = randomizeCast(tvSerie);
console.log('Cast randomized :');
console.log(randomizedCast);
tvSerie['cast members'] = randomizedCast;
console.log('New object TV serie :');
console.log(tvSerie);

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

/**
 * Shuffle the cast of an object tvSerie
 * @param {Object tvSerie} tvSerie The serie you want to shuffle the cast
 * @return {Number}   tvSerie object
 */

function randomizeCast(tvSerie)
{

	// Extract the array 'cast members' of the object

	let cast = tvSerie['cast members'];
	
	// Initialize a counter pointing at the end of the array
	
	let counter = cast.length;

	// While there are elements in the array
	
	while (counter > 0) {
		
		// Pick a random index
		
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		
		counter--;

		// And swap the last element with it
		
		let temp = cast[counter];
		cast[counter] = cast[index];
		cast[index] = temp;
	}

	return cast;
}