import { readFileSync } from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;

const file = path.join(__dirname, "test.lua");

export const script = readFileSync(file, "utf-8");
