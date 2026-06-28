#!/usr/bin/env node
/**
 * Terminal workflow for picking a page's hero photo, without a full rebuild:
 *
 *   npm run hero:reroll                 -- fetch a new random candidate for the main hero, print it
 *   npm run hero:lock -- <id>           -- pin the main hero to that exact photo
 *   npm run hero:unlock                 -- resume random rotation on each build
 *
 * Every command accepts an optional trailing target name (defaults to
 * "main") to manage a different page's locked hero photo, e.g.:
 *
 *   npm run hero:reroll:legal           -- fetch a candidate for the legal-page hero
 *   npm run hero:lock -- <id> legal     -- pin the legal-page hero to that exact photo
 *   npm run hero:unlock:legal           -- resume random rotation for the legal-page hero
 *
 * Talks to Unsplash directly (same calls as lib/unsplash.ts) so no Next.js
 * process or rebuild is needed just to preview candidates.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ORIENTATION = "landscape";

const TARGETS = {
  main: {
    query: "IT support managed services office technology professional",
    lockFile: "lib/heroPhoto.ts",
    exportName: "LOCKED_HERO_PHOTO_ID",
    label: "main hero",
  },
  legal: {
    query: "privacy policy data security legal document law",
    lockFile: "lib/legalHeroPhoto.ts",
    exportName: "LOCKED_LEGAL_HERO_PHOTO_ID",
    label: "legal page hero",
  },
};

function resolveTarget(name = "main") {
  const target = TARGETS[name];
  if (!target) {
    throw new Error(
      `Unknown target "${name}". Valid targets: ${Object.keys(TARGETS).join(", ")}`
    );
  }
  return { name, ...target };
}

function readAccessKey() {
  const envText = readFileSync(path.join(root, ".env"), "utf8");
  const match = envText.match(/^UNSPLASH_ACCESS_KEY=(.*)$/m);
  if (!match || !match[1].trim()) {
    throw new Error("UNSPLASH_ACCESS_KEY not found in .env");
  }
  return match[1].trim();
}

async function unsplashGet(path_, params) {
  const accessKey = readAccessKey();
  const query = new URLSearchParams({ client_id: accessKey, ...params });
  const res = await fetch(`https://api.unsplash.com${path_}?${query}`);
  if (!res.ok) {
    throw new Error(`Unsplash ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

function printPhoto(photo) {
  console.log(`\nID:          ${photo.id}`);
  console.log(`Photographer: ${photo.user?.name ?? "unknown"}`);
  console.log(`Preview:      ${photo.urls?.small}`);
  console.log(`Full size:    ${photo.urls?.regular}`);
  console.log(`On Unsplash:  ${photo.links?.html}`);
}

function writeLockFile(target, id) {
  const lockArgs = target.name === "main" ? "<photo-id>" : `<photo-id> ${target.name}`;
  const content = `/**
 * Hero photo lock for the ${target.label}. Set via
 * \`npm run hero:lock -- ${lockArgs}\`.
 * When set, this hero always shows this exact Unsplash photo instead of
 * pulling a new random one on each build.
 */
export const ${target.exportName}: string | null = ${id ? `"${id}"` : "null"};
`;
  writeFileSync(path.join(root, ...target.lockFile.split("/")), content, "utf8");
}

const [, , command, arg, targetArg] = process.argv;

try {
  if (command === "reroll") {
    // `reroll` has no <id> arg, so its optional target is the second arg.
    const target = resolveTarget(arg);
    const photo = await unsplashGet("/photos/random", {
      query: target.query,
      orientation: ORIENTATION,
    });
    printPhoto(photo);
    console.log(`\nLike this one? Run: npm run hero:lock -- ${photo.id}`);
  } else if (command === "lock") {
    if (!arg) {
      console.error("Usage: npm run hero:lock -- <photo-id> [target]");
      process.exit(1);
    }
    const target = resolveTarget(targetArg);
    const photo = await unsplashGet(`/photos/${encodeURIComponent(arg)}`, {});
    writeLockFile(target, photo.id);
    printPhoto(photo);
    console.log(`\nLocked the ${target.label}. Rebuild to see it on the site: npm run build`);
  } else if (command === "unlock") {
    // `unlock` has no <id> arg, so its optional target is the second arg.
    const target = resolveTarget(arg);
    writeLockFile(target, null);
    console.log(`Unlocked the ${target.label}. It will pull a new random photo on the next clean build.`);
  } else {
    console.log(
      "Usage:\n" +
        "  npm run hero:reroll [target]            preview a new random candidate\n" +
        "  npm run hero:lock -- <id> [target]      lock that hero to a specific photo ID\n" +
        "  npm run hero:unlock [target]            resume random rotation\n" +
        `\nValid targets: ${Object.keys(TARGETS).join(", ")} (default: main)`
    );
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
