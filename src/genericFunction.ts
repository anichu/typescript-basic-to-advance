const createArray = <T, X>(param1: T, param2: X): [T, X] => {
	return [param1, param2];
};

let an: [number, number] = createArray<number, number>(12, 24);

console.log(an);
