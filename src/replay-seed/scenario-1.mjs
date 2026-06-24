export const replaySeedScenario1 = {
  id: "seed-20260624200723-1",
  accountId: "acct_1",
  amountCents: 1275,
  postedOn: "2026-06-18",
  reviewNotes: [
    "fresh source PR for internal replay discovery",
    "kept intentionally small and deterministic",
  ],
};

export function summarizeReplaySeedScenario1(scenario = replaySeedScenario1) {
  const dollars = (scenario.amountCents / 100).toFixed(2);
  return scenario.accountId + ":" + dollars + ":" + scenario.postedOn;
}
