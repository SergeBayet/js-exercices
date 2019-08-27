/*
Create a program that will re-use the Rectangle class you created previously. It should generate 
1000 random instances of Rectangle with random positions and sizes. Then it will display all 
colliding rectangles amongst those that were generated that way.

The Rectangle class should be reused without any modification. If there is no way to solve this 
exercise without modifying it that means you haven't followed the previous exercise's definition 
correctly.
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

rects = [];
var numberOfRects = 1000;
for(var i = 1 ; i <= numberOfRects ; i++)
{
	var x = Math.round(Math.random() * 600);
	var y = Math.round(Math.random() * 480);
	var width = Math.round(Math.random() * 50);
	var length = Math.round(Math.random() * 50); 
	rects.push(new Rectangle(x, y, width, length));
}

for(i = 1 ; i <= numberOfRects ; i++)
{
	for(j = 1 ; j <= numberOfRects ; j++)
	{
		if(i !== j)
		{
			
			if(rects[i - 1].collides(rects[j - 1]))
			{
				console.log(i - 1 , "collides => " , j - 1);
			}
		}
	}
}


