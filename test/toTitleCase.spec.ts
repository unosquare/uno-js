import toTitleCase from "../src/toTitleCase";

describe("toTitleCase", () => {
	it("should return title cased string", () => {
		const result = toTitleCase("hello world!");
		expect(result).toBe("Hello World!");
	});
});
