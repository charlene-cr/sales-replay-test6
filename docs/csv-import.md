# CSV Import

CSV import exists for spreadsheet-based replay reviews. Managers often collect call notes before the replay parser is wired into a CRM export.

## Columns

- `account`: customer or prospect name.
- `owner`: sales owner responsible for the call.
- `outcome`: `won`, `lost`, `follow-up`, or `unknown`.
- `durationMinutes`: call length in whole minutes.
- `tags`: semicolon-separated review tags.
- `transcript`: transcript snippets separated by ` | `.

## Review Workflow

1. Export spreadsheet notes as CSV.
2. Parse rows into sales calls.
3. Score calls with the replay scorer.
4. Render manager briefs and tag rollups.
5. Export the normalized calls for auditability.