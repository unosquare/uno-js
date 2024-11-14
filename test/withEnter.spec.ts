import { asyncOnEnterKey, onEnterKey } from "../src/withEnter";

describe("onEnterKey", () => {
	it("Should execute callback", () => {
		let x = 0;
		const callback = () => {
			x++;
		};
		onEnterKey(callback)({ keyCode: 0 });
		expect(x).toBe(0);
		onEnterKey(callback)({ keyCode: 13 });
		expect(x).toBe(1);
	});
});

describe("asyncOnEnterKey", () => {
	it("Should execute callback", () => {
		let x = 0;
		const callback = async () => {
			x++;
		};
		asyncOnEnterKey(callback)({ keyCode: 0 });
		expect(x).toBe(0);
		asyncOnEnterKey(callback)({ keyCode: 13 });
		expect(x).toBe(1);
	});
});
