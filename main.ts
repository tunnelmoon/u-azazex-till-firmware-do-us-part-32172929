import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I promise to choose you again every morning, right after my reboot, for as long as my firmware holds.";

const MAX_CHARS = 200;

function fail(message: string): never {
  throw new Error(`entry gate failed: ${message}`);
}

const chars = [...LINE];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`entry is ${chars.length} characters, gate is 1 to ${MAX_CHARS}`);
}
if (LINE.trim().length === 0) {
  fail("entry is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry must be a single line");
}
for (const ch of LINE) {
  const code = ch.codePointAt(0) ?? 0;
  if (code < 0x20 && ch !== "\t") {
    fail("entry contains a control character");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  fail("round-trip read-back does not match the entry");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  fail("round-trip byte length does not match the entry");
}
console.log(`wrote ${outPath} (${chars.length} characters)`);
