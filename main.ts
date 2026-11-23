import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const HEADLINE =
  "After the longest climate summit in history, nearly 200 nations leave Turkey with no deal on fossil fuels.";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, HEADLINE, "utf8");

const back = readFileSync(OUT, "utf8");
const chars = [...back].length;
if (back.trim().length === 0) throw new Error("entry is blank");
if (chars < 1 || chars > 200)
  throw new Error(`entry is ${chars} chars, gate is 1-200`);
const sentences = back.split(".").filter((s) => s.trim().length > 0).length;
if (sentences !== 1)
  throw new Error(`entry has ${sentences} sentences, expected 1`);
console.log(`OK: ${chars} code points, 1 line, 1 sentence`);

// Structure check: a front-page headline names the place and a figure.
const PLACES = ["Turkey"];
const FIGURES = ["200"];
if (!PLACES.some((p) => back.includes(p)))
  throw new Error("headline names no place");
if (!FIGURES.some((f) => back.includes(f)))
  throw new Error("headline names no figure");
if (!back.endsWith(".")) throw new Error("headline does not end with a period");
console.log("OK: names Turkey and 200, ends with a period");
