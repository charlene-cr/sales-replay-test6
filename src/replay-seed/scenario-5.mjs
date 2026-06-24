export const replaySeedScenario5 = {
  id: "seed-20260624200723-5",
  accountId: "acct_5",
  amountCents: 5275,
  postedOn: "2026-06-54",
  reviewNotes: [
    "fresh source PR for internal replay discovery",
    "kept intentionally small and deterministic",
  ],
};

export function summarizeReplaySeedScenario5(scenario = replaySeedScenario5) {
  const dollars = (scenario.amountCents / 100).toFixed(2);
  return ;
}
