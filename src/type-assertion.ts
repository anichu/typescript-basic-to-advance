let amni: any;

amni = "anis molla";

(amni as number).toFixed(2);
(amni as string).length;

<string>amni.length;

function kgToGram(param: number | string): number | string | undefined {
	if (typeof param === "number") {
		return param * 1000;
	}

	if (typeof param === "string") {
		return `${parseFloat(param) * 1000} gram`;
	}
}

const gramNumber = <number>kgToGram(300);
const gramString = <string>kgToGram("300");
type CustomErrorType = {
	message: string;
};
try {
} catch (error) {
	console.log((error as CustomErrorType).message);
}
