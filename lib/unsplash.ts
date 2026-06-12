/**
 * Unsplash API utility — migrado de src/unsplash.js (Vite) a Next.js.
 * Corre exclusivamente en el servidor (Server Components / Route Handlers).
 * La key vive en UNSPLASH_ACCESS_KEY (sin NEXT_PUBLIC_, nunca expuesta al cliente).
 */

const UNSPLASH_API_BASE = "https://api.unsplash.com";

export type UnsplashPhoto = {
  id: string;
  regularUrl: string;
  smallUrl: string;
  fullUrl: string;
  width: number;
  height: number;
  altDescription: string;
  photographerName: string;
  photographerLink: string;
};

function getAccessKey(): string {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) throw new Error("Missing UNSPLASH_ACCESS_KEY in .env");
  return key;
}

async function fetchUnsplash<T>(
  path: string,
  params: Record<string, string> = {}
): Promise<T> {
  const query = new URLSearchParams({ client_id: getAccessKey(), ...params });
  const res = await fetch(`${UNSPLASH_API_BASE}${path}?${query}`, {
    // Cache 1 hora para no quemar el rate-limit de Unsplash (50 req/hora en free tier)
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Unsplash ${res.status}: ${await res.text()}`);
  }
  return res.json() as Promise<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function format(photo: any): UnsplashPhoto {
  return {
    id: photo.id,
    regularUrl: photo.urls?.regular ?? "",
    smallUrl: photo.urls?.small ?? "",
    fullUrl: photo.urls?.full ?? "",
    width: photo.width ?? 1080,
    height: photo.height ?? 720,
    altDescription:
      photo.alt_description ?? photo.description ?? "Unsplash image",
    photographerName: photo.user?.name ?? "Unsplash",
    photographerLink: photo.user?.links?.html ?? "https://unsplash.com",
  };
}

/**
 * Busca fotos por término. Retorna el primer resultado por defecto.
 * @param query — ej: "toronto office technology"
 * @param orientation — "landscape" | "portrait" | "squarish"
 */
export async function searchPhoto(
  query: string,
  orientation: "landscape" | "portrait" | "squarish" = "landscape"
): Promise<UnsplashPhoto | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await fetchUnsplash<any>("/search/photos", {
      query,
      orientation,
      per_page: "1",
    });
    const photo = data?.results?.[0];
    return photo ? format(photo) : null;
  } catch {
    return null;
  }
}

/**
 * Foto aleatoria con un query opcional.
 */
export async function randomPhoto(
  query?: string,
  orientation: "landscape" | "portrait" | "squarish" = "landscape"
): Promise<UnsplashPhoto | null> {
  try {
    const params: Record<string, string> = { orientation };
    if (query) params.query = query;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const photo = await fetchUnsplash<any>("/photos/random", params);
    return format(photo);
  } catch {
    return null;
  }
}

/**
 * Foto por ID específico de Unsplash.
 */
export async function photoById(id: string): Promise<UnsplashPhoto | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const photo = await fetchUnsplash<any>(`/photos/${encodeURIComponent(id)}`);
    return format(photo);
  } catch {
    return null;
  }
}
