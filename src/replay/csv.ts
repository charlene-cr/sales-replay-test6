import type { CallOutcome, SalesCall } from "../types.js";

export interface CsvCallRow {
	readonly account: string;
	readonly owner: string;
	readonly outcome: CallOutcome;
	readonly durationMinutes: number;
	readonly tags: readonly string[];
	readonly transcript: string;
}

export function parseCallsCsv(input: string): readonly CsvCallRow[] {
	const [headerLine, ...rows] = input.trim().split(/\r?\n/);
	const headers = splitCsvLine(headerLine ?? "");
	return rows.filter(Boolean).map((row) => parseCsvRow(headers, splitCsvLine(row)));
}

export function csvRowsToCalls(rows: readonly CsvCallRow[]): readonly SalesCall[] {
	return rows.map((row, index) => ({
		id: `csv-call-${String(index + 1).padStart(3, "0")}`,
		account: row.account,
		owner: row.owner,
		outcome: row.outcome,
		durationMinutes: row.durationMinutes,
		tags: row.tags,
		transcript: row.transcript.split(" | ").filter(Boolean),
	}));
}

export function renderCallsCsv(calls: readonly SalesCall[]): string {
	const header = ["account", "owner", "outcome", "durationMinutes", "tags", "transcript"].join(",");
	const rows = calls.map((call) =>
		[
			escapeCsv(call.account),
			escapeCsv(call.owner),
			call.outcome,
			String(call.durationMinutes),
			escapeCsv(call.tags.join(";")),
			escapeCsv(call.transcript.join(" | ")),
		].join(","),
	);
	return [header, ...rows].join("\n");
}

function parseCsvRow(headers: readonly string[], values: readonly string[]): CsvCallRow {
	const get = (name: string) => values[headers.indexOf(name)] ?? "";
	return {
		account: get("account"),
		owner: get("owner"),
		outcome: parseOutcome(get("outcome")),
		durationMinutes: Number(get("durationMinutes")),
		tags: get("tags").split(";").map((tag) => tag.trim()).filter(Boolean),
		transcript: get("transcript"),
	};
}

function parseOutcome(value: string): CallOutcome {
	if (value === "won" || value === "lost" || value === "follow-up" || value === "unknown") {
		return value;
	}
	throw new Error(`Unsupported CSV outcome: ${value}`);
}

function splitCsvLine(line: string): readonly string[] {
	const values: string[] = [];
	let current = "";
	let quoted = false;
	for (let index = 0; index < line.length; index += 1) {
		const char = line[index];
		if (char === '"' && line[index + 1] === '"') {
			current += '"';
			index += 1;
			continue;
		}
		if (char === '"') {
			quoted = !quoted;
			continue;
		}
		if (char === "," && !quoted) {
			values.push(current);
			current = "";
			continue;
		}
		current += char;
	}
	values.push(current);
	return values;
}

function escapeCsv(value: string): string {
	if (!/[",\n]/.test(value)) {
		return value;
	}
	return `"${value.replaceAll('"', '""')}"`;
}
