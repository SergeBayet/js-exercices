arr1 = [1, 2, 3, 4, 5];
arr2 = [100, 101, 102];
let i = 0;
for(let elem of arr1) {
	i += elem;
}

console.log(i);

i = 0;
for(let elem of arr2) {
	i += elem;
}
console.log(i);