import { summarizeReplaySeedScenario6 } from "../../src/replay-seed/scenario-6.mjs";

export function testReplaySeedScenario6() {
  const summary = summarizeReplaySeedScenario6();
  if (!summary.includes("acct_6")) {
    throw new Error("scenario 6 summary is missing account id");
  }
}
