import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { detectRiskSignals, riskSignalDefinitions, summarizeRiskSignals } from "../src/replay/risk-signals.js";

describe("risk signals", () => {
	it("detects configured phrases in transcripts", () => {
		const signals = detectRiskSignals(sampleCalls);

		expect(signals.some((signal) => signal.signal.id === "security_packet")).toBe(true);
		expect(signals.some((signal) => signal.signal.id === "budget_lock")).toBe(true);
	});

	it("keeps definitions grouped by category", () => {
		const categories = new Set(riskSignalDefinitions.map((definition) => definition.category));

		expect(categories.has("security")).toBe(true);
		expect(categories.has("commercial")).toBe(true);
		expect(categories.has("process")).toBe(true);
	});

	it("summarizes detected signals for manager review", () => {
		const summary = summarizeRiskSignals(detectRiskSignals(sampleCalls));

		expect(summary).toContain("Detected");
		expect(summary).toContain("High severity");
	});

	it("handles quiet transcripts", () => {
		expect(summarizeRiskSignals([])).toBe("No risk signals detected.");
	});
});
