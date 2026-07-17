/**
 * Hero photo locks for the hero social-proof avatars. Set via
 * `npm run hero:lock -- <id1>,<id2>,<id3>,<id4> faces`.
 * Each entry pins that slot to an exact Unsplash photo. A `null` entry (or a
 * failed fetch at render time) falls back to that slot's default content.
 * Run `npm run hero:unlock -- faces` to reset all slots.
 */
export const LOCKED_HERO_FACE_PHOTO_IDS: (string | null)[] = ["QazU5SRLudU", "egZjsZ4buC4", "jYGxN1vMWiw", "6bQVAQlSNyA"];
