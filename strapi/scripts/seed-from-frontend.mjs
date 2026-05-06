import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const outputPath = path.resolve(process.cwd(), "scripts", "seed-data.json");
const shouldPush = process.argv.includes("--push");
const baseUrl = process.env.STRAPI_SEED_URL || "http://localhost:9012";
const token = process.env.STRAPI_SEED_TOKEN;
const scriptDir = path.dirname(fileURLToPath(import.meta.url));

async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function loadPayloadFromFrontendDefaults() {
  const candidatePaths = [
    path.resolve(scriptDir, "../../src/data/cms/defaults.mjs"),
    path.resolve(scriptDir, "../../../src/data/cms/defaults.mjs"),
  ];

  for (const candidatePath of candidatePaths) {
    if (!(await fileExists(candidatePath))) {
      continue;
    }

    const defaultsModule = await import(pathToFileURL(candidatePath).href);
    const {
      defaultBusinessProcessesPage,
      defaultExecutionPage,
      defaultGlobalSettings,
      defaultHomepage,
      defaultInsightsPage,
      defaultOperationsPage,
    } = defaultsModule;

    return {
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
      insight: defaultInsightsPage,
      businessProcess: defaultBusinessProcessesPage,
      operation: defaultOperationsPage,
      execution: defaultExecutionPage,
    };
  }

  return null;
}

async function loadPayloadFromSeedFile() {
  const seedFilePath = path.resolve(process.cwd(), "scripts", "seed-data.json");

  if (!(await fileExists(seedFilePath))) {
    throw new Error(
      "Unable to locate frontend defaults or scripts/seed-data.json for seeding.",
    );
  }

  const raw = await fs.readFile(seedFilePath, "utf8");
  return JSON.parse(raw);
}

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

async function upsertSingleType(strapi, uid, data) {
  const existing = await strapi.documents(uid).findFirst();

  if (existing?.documentId) {
    return strapi.documents(uid).update({
      documentId: existing.documentId,
      data,
      status: "published",
    });
  }

  return strapi.documents(uid).create({
    data,
    status: "published",
  });
}

async function pushViaLocalStrapi(payload) {
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url);
  const { createStrapi } = require("@strapi/strapi");

  if (process.env.DATABASE_HOST === "sidago-postgres") {
    process.env.DATABASE_HOST =
      process.env.STRAPI_LOCAL_DATABASE_HOST || "127.0.0.1";
    process.env.DATABASE_PORT =
      process.env.STRAPI_LOCAL_DATABASE_PORT || "5343";
  }

  const strapi = createStrapi();

  await strapi.load();
  await upsertSingleType(strapi, "api::global.global", payload.global);
  await upsertSingleType(strapi, "api::homepage.homepage", payload.homepage);
  await upsertSingleType(strapi, "api::insight.insight", payload.insight);
  await upsertSingleType(
    strapi,
    "api::business-process.business-process",
    payload.businessProcess,
  );
  await upsertSingleType(
    strapi,
    "api::operation.operation",
    payload.operation,
  );
  await upsertSingleType(
    strapi,
    "api::execution.execution",
    payload.execution,
  );
}

async function main() {
  const payload =
    (await loadPayloadFromFrontendDefaults()) ??
    (await loadPayloadFromSeedFile());

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

  let usedLocalFallback = false;

  try {
    await pushSeedPayload(payload);
  } catch (error) {
    const shouldUseLocalFallback =
      error instanceof Error &&
      (error.message.includes("404") ||
        error.message.includes("405") ||
        error.message.includes("500") ||
        error.message.includes("fetch failed"));

    if (!shouldUseLocalFallback) {
      throw error;
    }

    process.stdout.write(
      "Custom /api/seed endpoint unavailable; falling back to direct local Strapi upserts.\n",
    );
    await pushViaLocalStrapi(payload);
    usedLocalFallback = true;
  }

  process.stdout.write(
    `Seed data pushed and published at ${baseUrl}/api\n`,
  );

  if (usedLocalFallback) {
    process.exit(0);
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack}\n`);
  process.exit(1);
});
