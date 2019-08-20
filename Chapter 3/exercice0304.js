let arr = [1, 2, 3, 4, 5];

min = 5000;
max = 0;

for(let elem of arr)
{
	if(elem < min)
	{
		min = elem;
	}
	if(elem > max)
	{
		max = elem;
	}
}

console.log("Minimum of array " + arr + " : " + min + " Maximum : " + max);