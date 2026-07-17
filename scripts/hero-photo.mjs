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
 * Some targets manage more than one photo (e.g. "faces", the 4 hero
 * social-proof avatars). For those, reroll prints a batch of candidates and
 * lock takes a comma-separated list matching that target's slot count:
 *
 *   npm run hero:reroll:faces                       -- fetch 4 candidate headshots
 *   npm run hero:lock -- <id1>,<id2>,<id3>,<id4> faces -- pin all 4 avatar slots
 *   npm run hero:unlock:faces                        -- reset all 4 slots
 *
 * Talks to Unsplash directly (same calls as lib/unsplash.ts) so no Next.js
 * process or rebuild is needed just to preview candidates.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = {
  main: {
    query: "IT support managed services office technology professional",
    lockFile: "lib/heroPhoto.ts",
    exportName: "LOCKED_HERO_PHOTO_ID",
    label: "main hero",
    orientation: "landscape",
  },
  legal: {
    query: "privacy policy data security legal document law",
    lockFile: "lib/legalHeroPhoto.ts",
    exportName: "LOCKED_LEGAL_HERO_PHOTO_ID",
    label: "legal page hero",
    orientation: "landscape",
  },
  faces: {
    query: "professional headshot portrait",
    lockFile: "lib/heroFacesPhoto.ts",
    exportName: "LOCKED_HERO_FACE_PHOTO_IDS",
    label: "hero social-proof avatars",
    orientation: "squarish",
    count: 4,
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
  if (Array.isArray(id)) {
    const idsArg = target.name === "faces" ? "<id1>,<id2>,<id3>,<id4>" : "<id1>,...";
    const arrayLiteral = `[${id.map((v) => (v ? `"${v}"` : "null")).join(", ")}]`;
    const content = `/**
 * Hero photo locks for the ${target.label}. Set via
 * \`npm run hero:lock -- ${idsArg} ${target.name}\`.
 * Each entry pins that slot to an exact Unsplash photo. A \`null\` entry (or a
 * failed fetch at render time) falls back to that slot's default content.
 * Run \`npm run hero:unlock -- ${target.name}\` to reset all slots.
 */
export const ${target.exportName}: (string | null)[] = ${arrayLiteral};
`;
    writeFileSync(path.join(root, ...target.lockFile.split("/")), content, "utf8");
    return;
  }

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
    const count = target.count ?? 1;
    const params = { query: target.query, orientation: target.orientation };
    if (count > 1) params.count = String(count);
    const result = await unsplashGet("/photos/random", params);
    const photos = Array.isArray(result) ? result : [result];
    photos.forEach(printPhoto);
    if (count > 1) {
      console.log(`\nLike these? Run: npm run hero:lock -- ${photos.map((p) => p.id).join(",")} ${target.name}`);
    } else {
      console.log(`\nLike this one? Run: npm run hero:lock -- ${photos[0].id}`);
    }
  } else if (command === "lock") {
    if (!arg) {
      console.error("Usage: npm run hero:lock -- <photo-id>[,<photo-id>,...] [target]");
      process.exit(1);
    }
    const target = resolveTarget(targetArg);
    const count = target.count ?? 1;
    const ids = arg.split(",").map((s) => s.trim()).filter(Boolean);
    if (ids.length !== count) {
      console.error(`The "${target.name}" target needs exactly ${count} id(s), got ${ids.length}.`);
      process.exit(1);
    }
    const photos = await Promise.all(
      ids.map((id) => unsplashGet(`/photos/${encodeURIComponent(id)}`, {}))
    );
    writeLockFile(target, count > 1 ? photos.map((p) => p.id) : photos[0].id);
    photos.forEach(printPhoto);
    console.log(`\nLocked the ${target.label}. Rebuild to see it on the site: npm run build`);
  } else if (command === "unlock") {
    // `unlock` has no <id> arg, so its optional target is the second arg.
    const target = resolveTarget(arg);
    const count = target.count ?? 1;
    writeLockFile(target, count > 1 ? Array(count).fill(null) : null);
    console.log(
      count > 1
        ? `Unlocked the ${target.label}. All ${count} slots fall back to their default content.`
        : `Unlocked the ${target.label}. It will pull a new random photo on the next clean build.`
    );
  } else {
    console.log(
      "Usage:\n" +
        "  npm run hero:reroll [target]                    preview new random candidate(s)\n" +
        "  npm run hero:lock -- <id>[,<id>,...] [target]   lock that hero to specific photo ID(s)\n" +
        "  npm run hero:unlock [target]                    reset that target's lock\n" +
        `\nValid targets: ${Object.keys(TARGETS).join(", ")} (default: main)`
    );
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
