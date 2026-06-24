import { summarizeReplaySeedScenario3 } from "../../src/replay-seed/scenario-3.mjs";

export function testReplaySeedScenario3() {
  const summary = summarizeReplaySeedScenario3();
  if (!summary.includes("acct_3")) {
    throw new Error("scenario 3 summary is missing account id");
  }
}
