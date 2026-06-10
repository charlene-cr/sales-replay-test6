import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { buildOutcomeInsights } from "../src/replay/outcome-insights.js";

describe("outcome insights", () => {
	it("groups calls by outcome", () => {
		const insights = buildOutcomeInsights(sampleCalls);

		expect(insights.map((insight) => insight.outcome)).toEqual(["won", "lost", "follow-up", "unknown"]);
	});

	it("adds manager-facing recommendations", () => {
		const insights = buildOutcomeInsights(sampleCalls);
		const followUp = insights.find((insight) => insight.outcome === "follow-up");

		expect(followUp?.recommendedReview).toContain("owner");
	});

	it("sorts accounts inside each outcome group", () => {
		const insights = buildOutcomeInsights(sampleCalls);
		const won = insights.find((insight) => insight.outcome === "won");

		expect(won?.accounts).toEqual([...(won?.accounts ?? [])].sort());
	});
});
