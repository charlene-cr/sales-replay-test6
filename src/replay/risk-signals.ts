import type { SalesCall } from "../types.js";

export type RiskSignalCategory = "security" | "commercial" | "legal" | "process" | "evidence" | "adoption";

export interface RiskSignalDefinition {
	readonly id: string;
	readonly category: RiskSignalCategory;
	readonly phrase: string;
	readonly severity: "low" | "medium" | "high";
	readonly coachingNote: string;
}

export interface DetectedRiskSignal {
	readonly callId: string;
	readonly account: string;
	readonly owner: string;
	readonly signal: RiskSignalDefinition;
	readonly transcriptLine: string;
}

export const riskSignalDefinitions: readonly RiskSignalDefinition[] = [
	{
		id: "security_packet",
		category: "security",
		phrase: "security packet",
		severity: "high",
		coachingNote: "Buyer needs security documentation before moving forward.",
	},
	{
		id: "procurement_review",
		category: "commercial",
		phrase: "procurement",
		severity: "high",
		coachingNote: "Procurement is now part of the buying path.",
	},
	{
		id: "budget_lock",
		category: "commercial",
		phrase: "budget is locked",
		severity: "high",
		coachingNote: "Budget timing may push the opportunity into a later cycle.",
	},
	{
		id: "legal_terms",
		category: "legal",
		phrase: "legal",
		severity: "medium",
		coachingNote: "Legal review is active or blocking next steps.",
	},
	{
		id: "no_clear_owner",
		category: "process",
		phrase: "who owns",
		severity: "medium",
		coachingNote: "The buyer has not named a decision owner.",
	},
	{
		id: "generic_demo",
		category: "evidence",
		phrase: "generic demo",
		severity: "medium",
		coachingNote: "The buyer wants evidence from their own repos.",
	},
	{
		id: "reviewer_trust",
		category: "adoption",
		phrase: "trust",
		severity: "medium",
		coachingNote: "Reviewer trust is a condition for adoption.",
	},
	{
		id: "dashboard_fatigue",
		category: "adoption",
		phrase: "dashboard",
		severity: "low",
		coachingNote: "The buyer is worried about another unread dashboard.",
	},
	{
		id: "pilot_scope",
		category: "process",
		phrase: "pilot",
		severity: "low",
		coachingNote: "Pilot scope or success criteria need to be tightened.",
	},
	{
		id: "timeline_gap",
		category: "process",
		phrase: "reconnect",
		severity: "low",
		coachingNote: "Next contact exists but lacks a strong decision artifact.",
	},
];

export function detectRiskSignals(
	calls: readonly SalesCall[],
	definitions: readonly RiskSignalDefinition[] = riskSignalDefinitions,
): readonly DetectedRiskSignal[] {
	return calls.flatMap((call) => detectCallSignals(call, definitions));
}

function detectCallSignals(
	call: SalesCall,
	definitions: readonly RiskSignalDefinition[],
): readonly DetectedRiskSignal[] {
	const detected: DetectedRiskSignal[] = [];
	for (const line of call.transcript) {
		const normalizedLine = line.toLowerCase();
		for (const definition of definitions) {
			if (normalizedLine.includes(definition.phrase.toLowerCase())) {
				detected.push({
					callId: call.id,
					account: call.account,
					owner: call.owner,
					signal: definition,
					transcriptLine: line,
				});
			}
		}
	}
	return detected;
}

export function summarizeRiskSignals(signals: readonly DetectedRiskSignal[]): string {
	if (signals.length === 0) {
		return "No risk signals detected.";
	}

	const highSignals = signals.filter((signal) => signal.signal.severity === "high");
	const accounts = [...new Set(signals.map((signal) => signal.account))].sort();
	return [
		`Detected ${signals.length} risk signals across ${accounts.length} accounts.`,
		`High severity signals: ${highSignals.length}.`,
		`Accounts: ${accounts.join(", ")}.`,
	].join(" ");
}
