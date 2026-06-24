export const replaySeedScenario3 = {
  id: "seed-20260624200723-3",
  accountId: "acct_3",
  amountCents: 3275,
  postedOn: "2026-06-20",
  reviewNotes: [
    "fresh source PR for internal replay discovery",
    "kept intentionally small and deterministic",
  ],
};

export function summarizeReplaySeedScenario3(scenario = replaySeedScenario3) {
  const dollars = (scenario.amountCents / 100).toFixed(2);
  return scenario.accountId + ":" + dollars + ":" + scenario.postedOn;
}
