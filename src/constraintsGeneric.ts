const ObjFunc = <
	T extends {
		name: string;
		age: number;
	}
>(
	Number: T
): T => {
	return Number;
};

type ObjType = {
	name: string;
	age: number;
	other1: number;
	other2: number;
};

const ObjMe: ObjType = {
	name: "anis",
	age: 12,
	other1: 1,
	other2: 2,
};

const Example = ObjFunc<ObjType>(ObjMe);
console.log(Example);
