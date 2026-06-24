export const replaySeedScenario6 = {
  id: "seed-20260624200723-6",
  accountId: "acct_6",
  amountCents: 6275,
  postedOn: "2026-06-64",
  reviewNotes: [
    "fresh source PR for internal replay discovery",
    "kept intentionally small and deterministic",
  ],
};

export function summarizeReplaySeedScenario6(scenario = replaySeedScenario6) {
  const dollars = (scenario.amountCents / 100).toFixed(2);
  return ;
}
