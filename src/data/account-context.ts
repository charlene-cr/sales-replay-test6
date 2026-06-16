export interface AccountContext {
	readonly account: string;
	readonly segment: "startup" | "mid-market" | "enterprise";
	readonly industry: string;
	readonly buyingMotion: string;
	readonly reviewFocus: readonly string[];
}

export const accountContexts: readonly AccountContext[] = [
	{
		account: "Northstar Health",
		segment: "enterprise",
		industry: "Healthcare",
		buyingMotion: "Security-led platform evaluation",
		reviewFocus: ["security evidence", "reviewer trust", "implementation planning"],
	},
	{
		account: "Harbor Ledger",
		segment: "mid-market",
		industry: "Financial services",
		buyingMotion: "Pilot expansion after procurement review",
		reviewFocus: ["procurement packet", "legal readiness", "pilot results"],
	},
	{
		account: "BrightCart",
		segment: "startup",
		industry: "Retail technology",
		buyingMotion: "Budget-timed business case",
		reviewFocus: ["budget timing", "business case", "reconnect trigger"],
	},
	{
		account: "Atlas Works",
		segment: "enterprise",
		industry: "Industrial software",
		buyingMotion: "Expansion from pilot team to platform group",
		reviewFocus: ["expansion readiness", "security summary", "rollout owner"],
	},
	{
		account: "Cedar Support",
		segment: "mid-market",
		industry: "Customer support",
		buyingMotion: "Support engineering workflow improvement",
		reviewFocus: ["escalation reduction", "technical readout", "director approval"],
	},
	{
		account: "MetroGrid",
		segment: "enterprise",
		industry: "Infrastructure",
		buyingMotion: "Early discovery around release review delays",
		reviewFocus: ["workflow inventory", "release delays", "sample scorecard"],
	},
];

export function findAccountContext(account: string): AccountContext | null {
	return accountContexts.find((context) => context.account === account) ?? null;
}
