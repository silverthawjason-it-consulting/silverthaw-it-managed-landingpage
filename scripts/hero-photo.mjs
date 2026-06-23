#!/usr/bin/env node
/**
 * Terminal workflow for picking the hero photo, without a full rebuild:
 *
 *   npm run hero:reroll          -- fetch a new random candidate, print it
 *   npm run hero:lock -- <id>    -- pin the hero to that exact photo
 *   npm run hero:unlock          -- resume random rotation on each build
 *
 * Talks to Unsplash directly (same calls as lib/unsplash.ts) so no Next.js
 * process or rebuild is needed just to preview candidates.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HERO_QUERY = "IT support managed services office technology professional";
const ORIENTATION = "landscape";

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

function writeLockFile(id) {
  const content = `/**
 * Hero photo lock. Set via \`npm run hero:lock -- <photo-id>\`.
 * When set, the hero always shows this exact Unsplash photo instead of
 * pulling a new random one on each build. Run \`npm run hero:unlock\` to
 * resume random rotation.
 */
export const LOCKED_HERO_PHOTO_ID: string | null = ${id ? `"${id}"` : "null"};
`;
  writeFileSync(path.join(root, "lib", "heroPhoto.ts"), content, "utf8");
}

const [, , command, arg] = process.argv;

try {
  if (command === "reroll") {
    const photo = await unsplashGet("/photos/random", {
      query: HERO_QUERY,
      orientation: ORIENTATION,
    });
    printPhoto(photo);
    console.log(`\nLike this one? Run: npm run hero:lock -- ${photo.id}`);
  } else if (command === "lock") {
    if (!arg) {
      console.error("Usage: npm run hero:lock -- <photo-id>");
      process.exit(1);
    }
    const photo = await unsplashGet(`/photos/${encodeURIComponent(arg)}`, {});
    writeLockFile(photo.id);
    printPhoto(photo);
    console.log(`\nLocked. Rebuild to see it on the site: npm run build`);
  } else if (command === "unlock") {
    writeLockFile(null);
    console.log("Unlocked. The hero will pull a new random photo on the next clean build.");
  } else {
    console.log(
      "Usage:\n" +
        "  npm run hero:reroll        preview a new random candidate\n" +
        "  npm run hero:lock -- <id>  lock the hero to a specific photo ID\n" +
        "  npm run hero:unlock        resume random rotation"
    );
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
