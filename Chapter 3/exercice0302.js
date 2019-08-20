arr1 = [1, 2, 3, 4, 5];
arr2 = [100, 101, 102];
let i = 0;
for(let elem of arr1) {
	i += elem;
}

console.log(i / arr1.length);

i = 0;
for(let elem of arr2) {
	i += elem;
}
console.log(i / arr2.length);