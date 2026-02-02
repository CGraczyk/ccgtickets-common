import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("build/cjs");
fs.mkdirSync(dir, { recursive: true });

const pkgPath = path.join(dir, "package.json");
fs.writeFileSync(pkgPath, JSON.stringify({ type: "commonjs" }, null, 2));

console.log("Wrote build/cjs/package.json (type: commonjs)");