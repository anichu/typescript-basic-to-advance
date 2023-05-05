type a = number;
type b = a extends number ? number : null;
type c = b extends null ? number : null;
type d = c extends number ? string : number;

type Sheikh = {
	wife1: string;
	wife2: string;
};

type aa = keyof Sheikh; //wife1|wife2
type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type checkWife2 = CheckProperty<Sheikh, "wife1">;
