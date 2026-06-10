import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { buildTagRollups, renderTagRollups } from "../src/replay/tag-rollup.js";

describe("tag rollups", () => {
	it("counts calls by tag", () => {
		const rollups = buildTagRollups(sampleCalls);

		expect(rollups.find((rollup) => rollup.tag === "security")?.calls).toBeGreaterThan(0);
	});

	it("deduplicates owners and accounts", () => {
		const rollups = buildTagRollups(sampleCalls);
		const security = rollups.find((rollup) => rollup.tag === "security");

		expect(security?.accounts).toEqual([...(security?.accounts ?? [])].sort());
		expect(security?.owners).toEqual([...(security?.owners ?? [])].sort());
	});

	it("renders a manager-readable summary", () => {
		const text = renderTagRollups(buildTagRollups(sampleCalls));

		expect(text).toContain("owners:");
	});

	it("handles empty tag sets", () => {
		expect(renderTagRollups([])).toBe("No call tags were found.");
	});
});
