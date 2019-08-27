/*
Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.
*/

const readlineSync = require("readline-sync");


class Circle {
	constructor(xPos, yPos, radius)
	{
		this.xPos = xPos;
		this.yPos = yPos;
		this.radius = radius;
	}
	move(xOffset, yOffset)
	{
		this.xPos += xOffset;
		this.yPos += yOffset;
	}
	get surface() {
		return 2 * Math.PI * Math.pow(this.radius, 2);
	}

}

circle = new Circle(4,8,5);

circle.move(2,7);

console.log(circle);

surf = circle.surface;

console.log(surf);