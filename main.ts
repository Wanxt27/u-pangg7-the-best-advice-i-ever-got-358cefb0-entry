// The Best Advice I Ever Got — make.fun entry (u-pangg7-the-best-advice-i-ever-got-358cefb0)
// Node 22, stdlib only. Writes one original sentence to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My father wiped his hands on a dish towel at midnight, looked at my failed exam, and told me to start again tomorrow, because quitting is the only way to truly fail.";

// Gate: one sentence, 1-200 characters, no newline, not blank.
// "One sentence" means exactly one sentence-ending mark, and it must be
// the last character (a trailing closing quote would break that test,
// so the entry itself carries no quotation marks).
const text = ENTRY.trim();
if (text.length === 0 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
const terminators = (text.match(/[.!?]/g) ?? []).length;
if (terminators !== 1 || !/[.!?]$/.test(text)) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
