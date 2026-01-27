import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandBank = JSON.parse(
  fs.readFileSync(path.join(__dirname, "commandBank.json"), "utf8")
);

export default function detectCommand(message) {
  for (const entry of commandBank) {
    for (const pattern of entry.patterns) {
      const regex = new RegExp(pattern, "i");
      if (regex.test(message)) {
        return entry.id;
      }
    }
  }
  return null;
}
