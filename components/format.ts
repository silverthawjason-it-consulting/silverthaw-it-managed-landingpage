// Acrónimos que deben ir en mayúsculas al "humanizar" un slug de URL.
const ACRONYMS = new Set(["it", "gta", "smb", "erp", "crm"]);

/**
 * Convierte un slug de URL en texto legible para inyectar en el Hero.
 * Ej: "managed-it"  -> "Managed IT"
 *     "toronto"     -> "Toronto"
 * Usado por las rutas dinámicas /[location]/[service] (Ads / A-B testing).
 */
export function humanize(slug?: string): string | undefined {
  if (!slug) return undefined;
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) =>
      ACRONYMS.has(w.toLowerCase())
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}
