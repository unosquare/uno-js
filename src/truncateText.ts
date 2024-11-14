export default (
	complement: TemplateStringsArray | string,
	text: string,
	length: number,
): string => {
	let result = text;

	if (text && text.length > length) {
		result = text.substring(0, length);
		const indexLastSpace = result.lastIndexOf(" ");

		if (indexLastSpace > -1 && typeof complement === "string") {
			return `${result.substring(0, indexLastSpace).trimEnd()}${complement}`;
		}
		if (indexLastSpace > -1 && typeof complement === "object") {
			result = result.substring(0, indexLastSpace).trimEnd();
		} else {
			return `${result}${complement}`;
		}
	}

	return typeof complement === "object"
		? `${complement[0]}${result}${complement[2]}`
		: result;
};
