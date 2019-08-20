arr1 = [1, 2, 3, 4, 5];

let arr2 = [];
let arr3;
for(let elem of arr1)
{
	arr2.push(elem);
}
console.log(arr2);

arr3 = arr1.slice();

console.log(arr3);