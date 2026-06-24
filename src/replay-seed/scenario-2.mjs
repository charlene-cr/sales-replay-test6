export const replaySeedScenario2 = {
  id: "seed-20260624200723-2",
  accountId: "acct_2",
  amountCents: 2275,
  postedOn: "2026-06-19",
  reviewNotes: [
    "fresh source PR for internal replay discovery",
    "kept intentionally small and deterministic",
  ],
};

export function summarizeReplaySeedScenario2(scenario = replaySeedScenario2) {
  const dollars = (scenario.amountCents / 100).toFixed(2);
  return scenario.accountId + ":" + dollars + ":" + scenario.postedOn;
}
