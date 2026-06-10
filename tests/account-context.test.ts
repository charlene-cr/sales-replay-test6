import { describe, expect, it } from "vitest";

import { findAccountContext } from "../src/data/account-context.js";
import { renderAccountContextLine } from "../src/replay/report.js";

describe("account context", () => {
	it("looks up known accounts", () => {
		const context = findAccountContext("Northstar Health");

		expect(context?.industry).toBe("Healthcare");
		expect(context?.reviewFocus).toContain("security evidence");
	});

	it("returns null for unknown accounts", () => {
		expect(findAccountContext("Unknown Co")).toBeNull();
	});

	it("renders context lines for reports", () => {
		expect(renderAccountContextLine("Atlas Works", "Expansion")).toBe("Atlas Works: Expansion");
	});
});
