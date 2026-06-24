import { summarizeReplaySeedScenario2 } from "../../src/replay-seed/scenario-2.mjs";

export function testReplaySeedScenario2() {
  const summary = summarizeReplaySeedScenario2();
  if (!summary.includes("acct_2")) {
    throw new Error("scenario 2 summary is missing account id");
  }
}
