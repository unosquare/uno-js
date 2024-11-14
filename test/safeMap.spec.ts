import { emptyIfNull, safeMap, safeObjectMap } from "../src/safeMap";

describe("safeMap", () => {
	it("should return empty array if value is null", () => {
		const result = safeMap(null, (x) => x);
		expect(result).toEqual([]);
	});

	it("should return empty array if value is undefined", () => {
		const result = safeMap(undefined, (x) => x);
		expect(result).toEqual([]);
	});

	it("should return empty array if value is empty array", () => {
		const result = safeMap([], (x) => x);
		expect(result).toEqual([]);
	});

	it("should return mapped array if value is not empty array", () => {
		const result = safeMap([1, 2, 3], (x) => x * 2);
		expect(result).toEqual([2, 4, 6]);
	});
});

describe("safeObjectMap", () => {
	it("should return empty array if value is null", () => {
		const result = safeObjectMap(null, (x) => (y) => y);
		expect(result).toEqual([]);
	});

	it("should return empty array if value is undefined", () => {
		const result = safeObjectMap(undefined, (x) => (y) => y);
		expect(result).toEqual([]);
	});

	it("should return empty array if value is empty object", () => {
		const result = safeObjectMap({}, (x) => (y) => y);
		expect(result).toEqual([]);
	});

	it("should return mapped array if value is not empty object", () => {
		const result = safeObjectMap(
			{ a: 1, b: 2, c: 3 },
			(x) => (y) => Number(x[y]) * 2,
		);
		expect(result).toEqual([2, 4, 6]);
	});
});

describe("emptyIfNull", () => {
	it("should return empty array if value is null", () => {
		const result = emptyIfNull(null);
		expect(result).toEqual([]);
	});

	it("should return empty array if value is undefined", () => {
		const result = emptyIfNull(undefined);
		expect(result).toEqual([]);
	});

	it("should return mapped array if value is not null or undefined", () => {
		const result = emptyIfNull([1, 2, 3], (x) => x);
		expect(result).toEqual([1, 2, 3]);
	});
});
