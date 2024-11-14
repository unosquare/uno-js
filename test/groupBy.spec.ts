import { aggregate, groupBy } from "../src/groupBy";

describe("groupBy", () => {
	it("should group an array of objects by a given property", () => {
		const data = [
			{ id: 1, name: "John" },
			{ id: 2, name: "Jane" },
			{ id: 3, name: "John" },
			{ id: 4, name: "Jane" },
		];

		const result = groupBy(data, "name");

		expect(result).toEqual({
			John: [
				{ id: 1, name: "John" },
				{ id: 3, name: "John" },
			],
			Jane: [
				{ id: 2, name: "Jane" },
				{ id: 4, name: "Jane" },
			],
		});
	});
});

describe("aggregate", () => {
	it("should group an array of objects by a given property and apply a map function", () => {
		const data = [
			{ id: 1, name: "John", age: 30 },
			{ id: 2, name: "Jane", age: 25 },
			{ id: 3, name: "John", age: 35 },
			{ id: 4, name: "Jane", age: 40 },
		];

		const result = aggregate(data, "name", (group) => {
			const totalAge = group.reduce((acc, curr) => acc + curr.age, 0);
			const averageAge = totalAge / group.length;

			return { totalAge, averageAge };
		});

		expect(result).toEqual({
			John: { totalAge: 65, averageAge: 32.5 },
			Jane: { totalAge: 65, averageAge: 32.5 },
		});
	});
});
