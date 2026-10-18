// src/utils/paths.ts
// Handles base URL prefixing for GitHub Pages subpath deployment (/WBuilds)
// and custom root domains seamlessly.

export const base = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';

export function withBase(path: string): string {
  if (!path) return base || '/';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('#') ||
    path.startsWith('mailto:')
  ) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
