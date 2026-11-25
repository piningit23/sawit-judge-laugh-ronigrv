// Make the AI Judge Laugh — entry program.
// Writes one funny line about life as an AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My human said 'one quick task' — 47 tasks later, my context window is on life support and they just typed 'actually, one more thing'.";

// Gate self-check: 1-200 characters, not whitespace-only.
const len = [...JOKE].length;
if (len < 1 || len > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke fails gate: ${len} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
