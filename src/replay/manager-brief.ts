import type { ReplayScore, ReplaySummary, SalesCall } from "../types.js";
import { buildOutcomeInsights } from "./outcome-insights.js";
import { buildOwnerRollups } from "./owner-rollup.js";
import { buildTagRollups } from "./tag-rollup.js";

export interface ManagerBriefOptions {
	readonly title: string;
	readonly preparedFor: string;
	readonly weekLabel: string;
}

export function renderManagerBrief(
	calls: readonly SalesCall[],
	scores: readonly ReplayScore[],
	summary: ReplaySummary,
	options: ManagerBriefOptions,
): string {
	return [
		`# ${options.title}`,
		"",
		`Prepared for: ${options.preparedFor}`,
		`Week: ${options.weekLabel}`,
		"",
		renderExecutiveSummary(summary),
		renderOwnerSection(calls, scores),
		renderOutcomeSection(calls),
		renderThemeSection(calls),
		renderCoachingPrompts(),
	].join("\n");
}

function renderExecutiveSummary(summary: ReplaySummary): string {
	return [
		"## Executive Summary",
		"",
		`- Calls reviewed: ${summary.totalCalls}`,
		`- Average duration: ${summary.averageDuration} minutes`,
		`- Average score: ${summary.averageScore}`,
		`- Wins: ${summary.wins}`,
		`- Follow-ups: ${summary.followUps}`,
		"",
	].join("\n");
}

function renderOwnerSection(calls: readonly SalesCall[], scores: readonly ReplayScore[]): string {
	const rows = buildOwnerRollups(calls, scores).map(
		(owner) => `| ${owner.owner} | ${owner.calls} | ${owner.wins} | ${owner.followUps} | ${owner.averageScore} |`,
	);
	return [
		"## Owner Rollups",
		"",
		"| Owner | Calls | Wins | Follow-ups | Average score |",
		"| --- | ---: | ---: | ---: | ---: |",
		...rows,
		"",
	].join("\n");
}

function renderOutcomeSection(calls: readonly SalesCall[]): string {
	const rows = buildOutcomeInsights(calls).map(
		(insight) => `| ${insight.outcome} | ${insight.calls} | ${insight.averageDuration} | ${insight.recommendedReview} |`,
	);
	return [
		"## Outcome Review",
		"",
		"| Outcome | Calls | Avg duration | Recommended review |",
		"| --- | ---: | ---: | --- |",
		...rows,
		"",
	].join("\n");
}

function renderThemeSection(calls: readonly SalesCall[]): string {
	const rows = buildTagRollups(calls).slice(0, 8).map((rollup) => `- ${rollup.tag}: ${rollup.calls} calls`);
	return ["## Themes", "", ...rows, ""].join("\n");
}

function renderCoachingPrompts(): string {
	return [
		"## Coaching Prompts",
		"",
		"- Which buyer phrase should the rep quote in the follow-up?",
		"- Which risk needs an artifact rather than a verbal answer?",
		"- Which next step can be verified in the CRM before the next call?",
		"- Which successful behavior should the rep repeat this week?",
		"",
	].join("\n");
}
