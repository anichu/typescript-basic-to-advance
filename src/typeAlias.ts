type WomanType = {
	name: string;
	age: number;
	profession?: string;
	isMarried?: boolean;
};

const Woman: WomanType = {
	name: "amena",
	age: 24,
	profession: "housewife",
	isMarried: true,
};

const Man: WomanType = {
	name: "anis",
	age: 12,
};

console.log(Woman);
console.log(Man);

function generateAdder(a: number): (b: number) => number {
	return function (b: number) {
		return a + b;
	};
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
