import type { SalesCall } from "../types.js";
import { parseTranscriptFixture } from "./transcript-parser.js";

export interface TranscriptLibraryEntry {
	readonly id: string;
	readonly path: string;
	readonly account: string;
	readonly owner: string;
	readonly primaryTheme: string;
	readonly coachingUse: string;
}

export const transcriptLibrary: readonly TranscriptLibraryEntry[] = [
	{
		id: "atlas-renewal",
		path: "fixtures/transcripts/enterprise/atlas-renewal.txt",
		account: "Atlas Works",
		owner: "Maya",
		primaryTheme: "Security review before renewal",
		coachingUse: "Use when a rep needs to connect security evidence to renewal urgency.",
	},
	{
		id: "brightcart-budget",
		path: "fixtures/transcripts/enterprise/brightcart-budget.txt",
		account: "BrightCart",
		owner: "Sam",
		primaryTheme: "Budget timing and pilot value",
		coachingUse: "Use when budget timing is real but the opportunity still needs a reconnect trigger.",
	},
	{
		id: "harbor-procurement",
		path: "fixtures/transcripts/enterprise/harbor-procurement.txt",
		account: "Harbor Ledger",
		owner: "Jon",
		primaryTheme: "Procurement packet review",
		coachingUse: "Use when procurement enters after a successful pilot.",
	},
	{
		id: "cedar-support",
		path: "fixtures/transcripts/enterprise/cedar-support.txt",
		account: "Cedar Support",
		owner: "Priya",
		primaryTheme: "Support engineering workflow",
		coachingUse: "Use when the buyer cares about escalation reduction more than developer velocity.",
	},
	{
		id: "northstar-security",
		path: "fixtures/transcripts/enterprise/northstar-security.txt",
		account: "Northstar Health",
		owner: "Maya",
		primaryTheme: "Security-led expansion",
		coachingUse: "Use when security readiness and reviewer trust are both active risks.",
	},
	{
		id: "metrogrid-discovery",
		path: "fixtures/transcripts/enterprise/metrogrid-discovery.txt",
		account: "MetroGrid",
		owner: "Jon",
		primaryTheme: "Early process discovery",
		coachingUse: "Use when the rep needs to slow down and map the current workflow.",
	},
	{
		id: "lumen-expansion",
		path: "fixtures/transcripts/enterprise/lumen-expansion.txt",
		account: "Lumen Apps",
		owner: "Priya",
		primaryTheme: "Expansion to mobile team",
		coachingUse: "Use when a pilot is expanding to a team with different rituals.",
	},
	{
		id: "riverbank-legal",
		path: "fixtures/transcripts/enterprise/riverbank-legal.txt",
		account: "Riverbank Credit",
		owner: "Sam",
		primaryTheme: "Legal review and data terms",
		coachingUse: "Use when legal language is blocking technical validation.",
	},
];

export function parseTranscriptLibrary(fixtures: ReadonlyMap<string, string>): readonly SalesCall[] {
	return transcriptLibrary.map((entry) => {
		const fixture = fixtures.get(entry.id);
		if (!fixture) {
			throw new Error(`Missing transcript fixture: ${entry.id}`);
		}
		return parseTranscriptFixture(fixture);
	});
}
