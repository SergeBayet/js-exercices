console.log(rand10());


/**
 * Pick a random number between 1 and 10
 * @return {number}   Random number
 */

function rand10()
{
	
	// Math.random : float between 0 and < 1
	// Multiply by 10
	// Math:floor : keep the integer part
	// We have a random number between 0 and 9. So add 1.

	return Math.floor(Math.random() * 10) + 1;
}
