// union
type MyType = string | number;

let Name: MyType;
Name = "anis molla";
Name = 12;
// person1

type P1 = {
	name: string;
};

type P2 = {
	age: number;
};

type Manager = P1 & P2;

const Me: Manager = {
	name: "anis",
	age: 12,
};

console.log(Me);
