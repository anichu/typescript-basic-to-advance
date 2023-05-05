const users: {
	name: string;
	age: number;
	isMarried: boolean;
	wifeName?: string;
} = {
	name: "anis",
	age: 12,
	isMarried: false,
	wifeName: "anis",
};

console.log(users);

interface userInt {
	name: string;
	age: number;
	isMarried: boolean;
	wifeName?: string;
}

let users1: userInt = {
	name: "anis",
	age: 12,
	isMarried: true,
};

console.log(users1);

interface Person {
	name: string;
	age: number;
	sayHello(): void;
}

let persons: Person = {
	name: "John",
	age: 30,
	sayHello: function () {
		console.log("Hello, my name is " + this.name);
	},
};

console.log(persons.name); // output: John
persons.sayHello(); // output: Hello, my name is John
