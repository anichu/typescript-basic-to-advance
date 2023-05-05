const makePromise = (): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		const date: string = "Date is fetched";
		if (date) {
			resolve(date);
		} else {
			reject("Failed to fetched data");
		}
	});
};

const getMessage = async (): Promise<void> => {
	const result = await makePromise();
	console.log(result);
};
getMessage();
