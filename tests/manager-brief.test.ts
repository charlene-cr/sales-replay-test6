import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { renderManagerBrief } from "../src/replay/manager-brief.js";
import { scoreCall } from "../src/replay/scoring.js";
import { summarizeReplay } from "../src/replay/summary.js";

describe("manager brief", () => {
	it("renders a weekly manager artifact", () => {
		const scores = sampleCalls.map(scoreCall);
		const brief = renderManagerBrief(sampleCalls, scores, summarizeReplay(sampleCalls, scores), {
			title: "Weekly Replay Brief",
			preparedFor: "Revenue Managers",
			weekLabel: "2026-W24",
		});

		expect(brief).toContain("# Weekly Replay Brief");
		expect(brief).toContain("## Owner Rollups");
		expect(brief).toContain("## Coaching Prompts");
	});

	it("includes outcome recommendations", () => {
		const scores = sampleCalls.map(scoreCall);
		const brief = renderManagerBrief(sampleCalls, scores, summarizeReplay(sampleCalls, scores), {
			title: "Outcome Brief",
			preparedFor: "Frontline Managers",
			weekLabel: "2026-W24",
		});

		expect(brief).toContain("Recommended review");
		expect(brief).toContain("Confirm the next meeting");
	});
});
