export const replaySeedScenario4 = {
  id: "seed-20260624200723-4",
  accountId: "acct_4",
  amountCents: 4275,
  postedOn: "2026-06-21",
  reviewNotes: [
    "fresh source PR for internal replay discovery",
    "kept intentionally small and deterministic",
  ],
};

export function summarizeReplaySeedScenario4(scenario = replaySeedScenario4) {
  const dollars = (scenario.amountCents / 100).toFixed(2);
  return scenario.accountId + ":" + dollars + ":" + scenario.postedOn;
}
