import type { SalesCall } from "../types.js";

export interface TagRollup {
	readonly tag: string;
	readonly calls: number;
	readonly accounts: readonly string[];
	readonly owners: readonly string[];
}

export function buildTagRollups(calls: readonly SalesCall[]): readonly TagRollup[] {
	const groups = new Map<string, SalesCall[]>();
	for (const call of calls) {
		for (const tag of call.tags) {
			groups.set(tag, [...(groups.get(tag) ?? []), call]);
		}
	}

	return [...groups.entries()]
		.map(([tag, taggedCalls]) => ({
			tag,
			calls: taggedCalls.length,
			accounts: unique(taggedCalls.map((call) => call.account)),
			owners: unique(taggedCalls.map((call) => call.owner)),
		}))
		.sort((left, right) => right.calls - left.calls || left.tag.localeCompare(right.tag));
}

export function renderTagRollups(rollups: readonly TagRollup[]): string {
	if (rollups.length === 0) {
		return "No call tags were found.";
	}

	return rollups
		.map((rollup) => {
			const accountList = rollup.accounts.join(", ");
			const ownerList = rollup.owners.join(", ");
			return `${rollup.tag}: ${rollup.calls} calls across ${accountList} (owners: ${ownerList})`;
		})
		.join("\n");
}

function unique(values: readonly string[]): readonly string[] {
	return [...new Set(values)].sort();
}
