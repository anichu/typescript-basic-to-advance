type user = {
	name: string;
	age: number;
};

interface UserInterface {
	name: string;
	age: number;
}

type ExUser = user & {
	role: string;
};

interface ExtendUser extends UserInterface {
	role: string;
}

const userTemplate: ExtendUser = {
	name: "anis",
	age: 12,
	role: "admin",
};

const userAlias: ExUser = {
	name: "anis",
	age: 12,
	role: "admin",
};

type AddNumberTypes = (num1: number, num2: number) => number;
const addMe: AddNumberTypes = (num1, num2) => num1 + num2;
addMe(12, 23);
type PT = number;
const personName: PT = 12;

type RollNumbers = number[];
const rollAlias: RollNumbers = [1, 2, 3, 4, 4, 5];

interface RollNumbersInterface {
	[index: number]: number;
}
const rollsInterface: RollNumbersInterface = [1, 2, 3, 4, 45];

console.log(userAlias);
