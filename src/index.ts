const person: string = "anis molla";
const num: number = 10;
const isAdmin: boolean = false;
const nums = [1, 2, 3, 3, 4];

function addSum(a: number, b: number): number {
	return a + b;
}

console.log(addSum(10, 20));

interface Obj {
	name: string;
	age: number;
}

function me(person: Obj): string {
	return person.name;
}

console.log(me({ name: "anis", age: 12 }));
