interface PersonInterface<T, U = number> {
	name: T;
	age: U;
}

const person1: PersonInterface<string> = {
	name: "anis",
	age: 12,
};
