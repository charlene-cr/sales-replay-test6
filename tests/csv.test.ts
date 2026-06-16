import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { csvRowsToCalls, parseCallsCsv, renderCallsCsv } from "../src/replay/csv.js";

const csv = `account,owner,outcome,durationMinutes,tags,transcript
Northstar Health,Maya,follow-up,34,security;discovery,"Rep asked why now | Buyer named security review"
Harbor Ledger,Jon,won,46,procurement;pilot,"Rep sent packet | Buyer approved next team"`;

describe("CSV replay import", () => {
	it("parses spreadsheet rows", () => {
		const rows = parseCallsCsv(csv);

		expect(rows).toHaveLength(2);
		expect(rows[0]?.tags).toContain("security");
	});

	it("converts rows into sales calls", () => {
		const calls = csvRowsToCalls(parseCallsCsv(csv));

		expect(calls[0]?.id).toBe("csv-call-001");
		expect(calls[0]?.transcript).toHaveLength(2);
	});

	it("exports calls back to CSV", () => {
		const output = renderCallsCsv(sampleCalls);

		expect(output).toContain("account,owner,outcome");
		expect(output).toContain("Northstar Health");
	});

	it("rejects unsupported outcomes", () => {
		expect(() => parseCallsCsv("account,owner,outcome,durationMinutes,tags,transcript\nA,B,maybe,1,x,y")).toThrow(
			"Unsupported CSV outcome",
		);
	});
});
