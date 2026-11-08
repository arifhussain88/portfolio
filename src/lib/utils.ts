// GitHub Pages serves the site under /portfolio. The Pages build step rewrites next.config,
// so the env value can be missing there; fall back to the production path.
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === "production" ? "/portfolio" : "");

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && cleanPath.startsWith(`${basePath}/`)) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
