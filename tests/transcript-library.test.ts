import { describe, expect, it } from "vitest";

import { parseTranscriptLibrary, transcriptLibrary } from "../src/replay/transcript-library.js";

const fixtureMap = new Map(
	transcriptLibrary.map((entry) => [
		entry.id,
		`id: ${entry.id}
account: ${entry.account}
owner: ${entry.owner}
outcome: follow-up
duration: 42
tags: replay, coaching

Rep: What changed since we last talked?
Buyer: The team needs evidence from our own workflow.
Rep: I will send the replay packet before the manager review.
`,
	]),
);

describe("transcript library", () => {
	it("keeps transcript metadata available for coaching selection", () => {
		expect(transcriptLibrary).toHaveLength(8);
		expect(transcriptLibrary[0]?.coachingUse).toContain("security evidence");
	});

	it("parses library fixtures into sales calls", () => {
		const calls = parseTranscriptLibrary(fixtureMap);

		expect(calls).toHaveLength(transcriptLibrary.length);
		expect(calls[0]?.transcript[0]).toContain("Rep:");
	});

	it("fails when a fixture is missing", () => {
		expect(() => parseTranscriptLibrary(new Map())).toThrow("Missing transcript fixture");
	});
});
