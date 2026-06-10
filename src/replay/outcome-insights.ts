import type { CallOutcome, SalesCall } from "../types.js";

export interface OutcomeInsight {
	readonly outcome: CallOutcome;
	readonly calls: number;
	readonly averageDuration: number;
	readonly accounts: readonly string[];
	readonly recommendedReview: string;
}

export function buildOutcomeInsights(calls: readonly SalesCall[]): readonly OutcomeInsight[] {
	const outcomes: readonly CallOutcome[] = ["won", "lost", "follow-up", "unknown"];
	return outcomes
		.map((outcome) => summarizeOutcome(outcome, calls.filter((call) => call.outcome === outcome)))
		.filter((insight) => insight.calls > 0);
}

function summarizeOutcome(outcome: CallOutcome, calls: readonly SalesCall[]): OutcomeInsight {
	const totalDuration = calls.reduce((sum, call) => sum + call.durationMinutes, 0);
	return {
		outcome,
		calls: calls.length,
		averageDuration: calls.length === 0 ? 0 : round(totalDuration / calls.length),
		accounts: calls.map((call) => call.account).sort(),
		recommendedReview: recommendationFor(outcome),
	};
}

function recommendationFor(outcome: CallOutcome): string {
	if (outcome === "won") {
		return "Compare the winning call's discovery and next-step language against open follow-ups.";
	}
	if (outcome === "lost") {
		return "Review the lost reason and identify a specific reconnect trigger.";
	}
	if (outcome === "follow-up") {
		return "Confirm the next meeting has an owner, decision artifact, and date.";
	}
	return "Add a disposition before this call is included in manager coaching.";
}

function round(value: number): number {
	return Math.round(value * 10) / 10;
}
