type genericTuples<X, Y> = [X, Y];
type geneRicTypes<T> = Array<T>;

const numberg: geneRicTypes<number> = [1, 2, 3, 4];
const namesg: geneRicTypes<string> = ["anis", "molla"];
const relation: genericTuples<string, string> = ["anis", "molla"];

type namesTypes = {
	name: string;
	age: number;
};

const namesObj: geneRicTypes<namesTypes> = [{ name: "anis", age: 12 }];

console.log(namesObj);
