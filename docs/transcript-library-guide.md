# Transcript Library Guide

The transcript library gives managers and reviewers a realistic set of calls to use when validating replay behavior.

## Selection Principles

- Include calls where the buyer states pain in their own words.
- Include at least one objection that requires an artifact, not a verbal answer.
- Include a next step that can be checked in a manager review.
- Prefer calls with different owners so coaching examples do not sound like one rep's style.
- Prefer calls with different industries so review language stays concrete.

## Library Entries

| Fixture | Account | Owner | Primary coaching use |
| --- | --- | --- | --- |
| atlas-renewal | Atlas Works | Maya | Use for security review before renewal and renewal review. |
| brightcart-budget | BrightCart | Sam | Use for budget timing and pilot value and budget review. |
| harbor-procurement | Harbor Ledger | Jon | Use for procurement packet review and procurement review. |
| cedar-support | Cedar Support | Priya | Use for support engineering workflow and support review. |
| northstar-security | Northstar Health | Maya | Use for security-led expansion and security review. |
| metrogrid-discovery | MetroGrid | Jon | Use for early process discovery and discovery review. |
| lumen-expansion | Lumen Apps | Priya | Use for expansion to mobile team and expansion review. |
| riverbank-legal | Riverbank Credit | Sam | Use for legal review and data terms and legal review. |

## Reviewer Notes

### Atlas Works

- Fixture: `atlas-renewal`
- Owner: Maya
- Theme: Security review before renewal
- Primary tag: renewal
- Buyer context: The platform team needs cleaner evidence before we expand review automation.
- Objection to inspect: Procurement wants a renewal memo that explains savings and support load.
- Next-step expectation: Maya agrees to send the security addendum and a rollout plan.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### BrightCart

- Fixture: `brightcart-budget`
- Owner: Sam
- Theme: Budget timing and pilot value
- Primary tag: budget
- Buyer context: The buyer likes the workflow but needs proof before the October planning cycle.
- Objection to inspect: Finance wants the pilot tied to fewer regression escalations.
- Next-step expectation: Sam schedules a planning follow-up with the engineering manager.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### Harbor Ledger

- Fixture: `harbor-procurement`
- Owner: Jon
- Theme: Procurement packet review
- Primary tag: procurement
- Buyer context: Legal and procurement need the security packet before team expansion.
- Objection to inspect: The buyer asks for implementation risk and data retention language.
- Next-step expectation: Jon commits to a same-day packet and implementation checklist.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### Cedar Support

- Fixture: `cedar-support`
- Owner: Priya
- Theme: Support engineering workflow
- Primary tag: support
- Buyer context: Support engineering wants fewer escalations from code quality regressions.
- Objection to inspect: The director can approve after a technical readout next week.
- Next-step expectation: Priya proposes a readout agenda and owner map.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### Northstar Health

- Fixture: `northstar-security`
- Owner: Maya
- Theme: Security-led expansion
- Primary tag: security
- Buyer context: Security wants to know how findings are scoped and retained.
- Objection to inspect: The platform lead is worried about reviewer trust and noisy comments.
- Next-step expectation: Maya sets up a technical validation with the security architect.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### MetroGrid

- Fixture: `metrogrid-discovery`
- Owner: Jon
- Theme: Early process discovery
- Primary tag: discovery
- Buyer context: The team is mapping how review delays affect infrastructure releases.
- Objection to inspect: They need examples before deciding whether to run a pilot.
- Next-step expectation: Jon asks for the workflow inventory and shares a sample scorecard.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### Lumen Apps

- Fixture: `lumen-expansion`
- Owner: Priya
- Theme: Expansion to mobile team
- Primary tag: expansion
- Buyer context: The web team pilot is working and mobile wants the same review guardrails.
- Objection to inspect: The mobile lead wants onboarding to fit into sprint planning.
- Next-step expectation: Priya offers a two-week onboarding plan and success criteria.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

### Riverbank Credit

- Fixture: `riverbank-legal`
- Owner: Sam
- Theme: Legal review and data terms
- Primary tag: legal
- Buyer context: Legal needs terms that explain where comments and telemetry are stored.
- Objection to inspect: The engineering director wants a clear answer before the security review.
- Next-step expectation: Sam collects legal questions and books a follow-up with security.
- Manager question: What artifact would prove the rep understood the buyer?
- Follow-up check: Confirm the rep names a date, owner, and decision artifact.

## Maintenance Checklist

- Keep transcripts plain text so sales examples are easy to edit in review.
- Avoid real customer secrets, tokens, private URLs, or personal contact details.
- Keep each fixture focused on one primary coaching theme.
- Add a parser test when the fixture shape changes.
- Review fixture language quarterly so examples do not drift from current sales motion.
- Keep buyer and rep turns readable without requiring timestamps.
- Use account names that are fictional or approved for sample data.
- Keep the transcript long enough for discovery, objection, and next-step scoring.
- Add a manager note when a fixture is intended for onboarding.
- Remove fixtures that duplicate the same objection without a new coaching angle.

## Example Review Prompts

- Which line proves the buyer has business urgency?
- Which line should be quoted in the follow-up email?
- Which objection requires legal, security, or procurement support?
- Which next step can a manager inspect before the next call?
- Which owner would benefit from hearing this example in team review?
- Which transcript line should the scoring rubric ignore as small talk?
- Which account context would change how the manager coaches the rep?
- Which tag should appear in the weekly manager brief?
- Which risk signal would cause escalation?
- Which successful behavior should be reused in another call?

## Onboarding Rubric

| Skill | What good sounds like | What to coach |
| --- | --- | --- |
| Discovery | Buyer explains why the workflow matters now. | Ask one more impact question before pitching. |
| Objection handling | Rep names the concern and offers a specific artifact. | Avoid reassuring language without proof. |
| Security readiness | Rep knows who reviews the packet and when. | Identify the security owner before the next call. |
| Procurement readiness | Rep connects pilot evidence to approval needs. | Do not wait for procurement to ask twice. |
| Follow-up clarity | Buyer agrees to owner, date, and artifact. | Replace vague check-ins with inspection points. |
| Manager review | Manager can quote the buyer and choose one behavior. | Keep the review focused on one skill at a time. |

## Fixture Acceptance Criteria

- The transcript has enough context for a reviewer who did not hear the call.
- The objection is visible in buyer language, not only in manager notes.
- The next step is explicit enough to test follow-up scoring.
- The fixture adds a new coaching angle to the library.
- The account name is fictional or approved sample data.

## Quarterly Review

- Check whether the sales motion has changed since the fixture was written.
- Replace examples that no longer match current procurement or security language.
- Confirm every owner represented in the library still maps to a useful coaching persona.
- Add one new fixture when a new objection becomes common across the team.
- Archive fixtures that teach the same lesson as a clearer transcript.
- Keep the manager-facing notes aligned with the current review rubric.

## Merge Review Checklist

- Fixture parses with the transcript parser.
- Fixture has a clear primary theme.
- Fixture includes at least one coaching-ready buyer quote.
- Fixture includes a next-step artifact.
- Fixture owner matches the library metadata.
- Fixture tags match the expected coaching theme.
- Fixture notes explain why the call belongs in the library.
