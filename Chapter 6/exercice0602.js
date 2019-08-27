/*
Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght. Add a 
method named collides(otherRectangle) that returns true only if the current rectangle collides 
with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.

Hint: The algorithm to detect colliding rectangles is a pain in ass to write. You really want 
some inpsiration to write it.
*/

const readlineSync = require("readline-sync");


class Rectangle {
	constructor(topLeftXPos, topLeftYPos, width, length)
	{
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.length = length;
	}
	collides(rect)
	{
		if (this.topLeftXPos < rect.topLeftXPos + rect.width &&
			this.topLeftXPos + this.width > rect.topLeftXPos &&
			this.topLeftYPos < rect.topLeftYPos + rect.length &&
			this.length + this.topLeftYPos > rect.topLeftYPos) {
			
				return true;
		}
		
		return false;
	}
	

}

a = new Rectangle(5, 5, 50, 50);
b = new Rectangle(20, 10, 10, 10);
console.log(a);
console.log(b);
console.log(b.collides(a));