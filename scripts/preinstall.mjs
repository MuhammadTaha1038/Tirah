import { unlinkSync } from "fs";
import { join } from "path";

// Remove package-lock.json and yarn.lock if they exist
const rootDir = process.cwd();
const filesToRemove = ["package-lock.json", "yarn.lock"];

for (const file of filesToRemove) {
  try {
    unlinkSync(join(rootDir, file));
    console.log(`Removed ${file}`);
  } catch {
    // File doesn't exist, that's fine
  }
}

// Check that pnpm is being used
const userAgent = process.env.npm_config_user_agent || "";
if (!userAgent.startsWith("pnpm")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
