import fs from "node:fs/promises";
import path from "node:path";
import {
  defaultBusinessProcessesPage,
  defaultGlobalSettings,
  defaultHomepage,
  defaultOperationsPage,
} from "../../src/data/cms/defaults.mjs";

const outputPath = path.resolve(process.cwd(), "scripts", "seed-data.json");
const shouldPush = process.argv.includes("--push");
const baseUrl = process.env.STRAPI_SEED_URL || "http://localhost:9001";
const token = process.env.STRAPI_SEED_TOKEN;

async function writeSeedFile(payload) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
}

async function pushSeedPayload(payload) {
  const response = await fetch(`${baseUrl}/api/seed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: payload }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to push seed payload: ${response.status} ${body}`);
  }
}

async function main() {
  const payload = {
    generatedAt: new Date().toISOString(),
    global: {
      siteName: defaultGlobalSettings.siteName,
      siteContactEmail: defaultGlobalSettings.siteContactEmail.replace(
        /^mailto:/,
        "",
      ),
      version: defaultGlobalSettings.version,
      socialLinks: defaultGlobalSettings.socialLinks,
      footer: defaultGlobalSettings.footer,
    },
    homepage: defaultHomepage,
    businessProcess: defaultBusinessProcessesPage,
    operation: defaultOperationsPage,
  };

  await writeSeedFile(payload);
  process.stdout.write(
    `Seed data exported to ${path.relative(process.cwd(), outputPath)}\n`,
  );

  if (!shouldPush) {
    return;
  }

  if (!token) {
    throw new Error("STRAPI_SEED_TOKEN is required when using --push.");
  }

  await pushSeedPayload(payload);
  process.stdout.write(
    `Seed data pushed and published at ${baseUrl}/api\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.stack}\n`);
  process.exit(1);
});
