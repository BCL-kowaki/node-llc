// public/.well-known/agent-skills/*/SKILL.md から索引(index.json)を生成する。
// SKILL.md の編集後に digest がずれないよう、ビルド前に毎回実行する
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://node-llc.com";
const SKILLS_DIR = "public/.well-known/agent-skills";

const skills = readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()
  .map((name) => {
    const content = readFileSync(join(SKILLS_DIR, name, "SKILL.md"));
    const description = content.toString().match(/^description:\s*(.+)$/m)?.[1];
    if (!description) throw new Error(`${name}/SKILL.md に description がありません`);
    return {
      name,
      type: "skill-md",
      description,
      url: `${SITE_URL}/.well-known/agent-skills/${name}/SKILL.md`,
      digest: `sha256:${createHash("sha256").update(content).digest("hex")}`,
    };
  });

const index = {
  $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
  skills,
};
writeFileSync(join(SKILLS_DIR, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
