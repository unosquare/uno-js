import validateNotNull from "../src/validateNotNull";

const validObject = {
	x: "Valid",
	y: 0,
	z: true,
};

const invalidObject = {
	x: "Valid",
	y: null,
	z: true,
};

describe("validateObject", () => {
	it("should return true if valid", () => {
		expect(validateNotNull(validObject)).toBe(true);
	});
	it("should return false if invalid", () => {
		expect(validateNotNull(invalidObject)).toBe(false);
	});
	it("should return true if ignore null prop", () => {
		expect(validateNotNull(invalidObject, ["y"])).toBe(true);
	});
});
