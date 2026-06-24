import { summarizeReplaySeedScenario1 } from "../../src/replay-seed/scenario-1.mjs";

export function testReplaySeedScenario1() {
  const summary = summarizeReplaySeedScenario1();
  if (!summary.includes("acct_1")) {
    throw new Error("scenario 1 summary is missing account id");
  }
}
