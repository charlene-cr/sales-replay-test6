import { summarizeReplaySeedScenario5 } from "../../src/replay-seed/scenario-5.mjs";

export function testReplaySeedScenario5() {
  const summary = summarizeReplaySeedScenario5();
  if (!summary.includes("acct_5")) {
    throw new Error("scenario 5 summary is missing account id");
  }
}
