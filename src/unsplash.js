const UNSPLASH_API_BASE = 'https://api.unsplash.com';

function getUnsplashAccessKey() {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    throw new Error('Missing VITE_UNSPLASH_ACCESS_KEY. Set it in your .env file.');
  }
  return accessKey;
}

function buildUnsplashUrl(path, queryParams = {}) {
  const accessKey = getUnsplashAccessKey();
  const params = new URLSearchParams({
    client_id: accessKey,
    ...queryParams,
  });
  return `${UNSPLASH_API_BASE}${path}?${params}`;
}

async function fetchUnsplash(path, queryParams = {}) {
  const url = buildUnsplashUrl(path, queryParams);
  const response = await fetch(url);
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Unsplash API error: ${response.status} ${response.statusText} - ${errorBody}`);
  }
  return response.json();
}

export async function searchUnsplashPhotos(query, extraParams = {}) {
  if (!query) {
    throw new Error('searchUnsplashPhotos requires a query string.');
  }
  return fetchUnsplash('/search/photos', { query, ...extraParams });
}

export async function getRandomUnsplashPhoto(extraParams = {}) {
  return fetchUnsplash('/photos/random', extraParams);
}

export async function getUnsplashPhotoById(photoId, extraParams = {}) {
  if (!photoId) {
    throw new Error('getUnsplashPhotoById requires a photoId.');
  }
  return fetchUnsplash(`/photos/${encodeURIComponent(photoId)}`, extraParams);
}

export function formatUnsplashPhoto(photo) {
  if (!photo) {
    return null;
  }
  return {
    id: photo.id,
    regularUrl: photo.urls?.regular,
    smallUrl: photo.urls?.small,
    altDescription: photo.alt_description || photo.description || 'Unsplash image',
    photographerName: photo.user?.name,
    photographerLink: photo.user?.links?.html,
  };
}

export function buildUnsplashAttribution(photo) {
  const formatted = formatUnsplashPhoto(photo);
  if (!formatted) {
    return null;
  }
  return {
    text: formatted.photographerName ? `Photo by ${formatted.photographerName} on Unsplash` : 'Photo by Unsplash',
    href: formatted.photographerLink,
  };
}
