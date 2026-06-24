import { summarizeReplaySeedScenario4 } from "../../src/replay-seed/scenario-4.mjs";

export function testReplaySeedScenario4() {
  const summary = summarizeReplaySeedScenario4();
  if (!summary.includes("acct_4")) {
    throw new Error("scenario 4 summary is missing account id");
  }
}
