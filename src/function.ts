function add(a: number, b: number = 20): number {
	return a + b;
}

console.log(add(10, 40));

function voidFunc(): void {
	console.log("anis molla");
}

voidFunc();

function numFunc(...numbers: number[]): void {
	console.log(numbers);
}

console.log(numFunc(12, 1, 21, 2, 2, 1, 21, 21));
