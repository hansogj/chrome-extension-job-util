export const sum = (numbers: string) =>
	eval(
		numbers
			.split(/\s/)
			.filter((e) => e.length)
			.map((str) => str.replace(',', '.'))
			.map((str) => str.trim())
			.join('+')
	);

function getMinutes(now: any, then: any) {
	return now.getMinutes() > then.getMinutes()
		? now.getMinutes() - then.getMinutes()
		: 60 - (then.getMinutes() - now.getMinutes());
}

export const tid = (h: number, min: number) => {
	var start = new Date();
	start.setHours(h);
	start.setMinutes(min);

	var now = new Date();
	return `Det er nå ${now.getHours() - start.getHours()} timer og ${getMinutes(
		now,
		start
	)} minutter siden du kom på jobb`;
};
