import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Alien Field Notes: The Two Day Earth Review — one line, an alien tourist's
// review of planet Earth, at most 200 characters.
const line =
  "Day 2: I asked for the manager of Earth and was handed a pigeon. It cooed. I have never felt more heard. Five stars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate (competition rules): one line of UTF-8 text, 1–200 characters,
// not only white space.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
