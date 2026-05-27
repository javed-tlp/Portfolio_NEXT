import fs from "fs";
import path from "path";

/** Folder under `public/` — drop images here and they appear in the carousel. */
export const PORTRAIT_FOLDER = "javed";

export const PORTRAIT_PUBLIC_PATH = `/${PORTRAIT_FOLDER}`;

/** Common raster & web image extensions (case-insensitive). */
export const PORTRAIT_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".jpe",
  ".jfif",
  ".pjpeg",
  ".pjp",
  ".png",
  ".apng",
  ".gif",
  ".webp",
  ".avif",
  ".heic",
  ".heif",
  ".bmp",
  ".dib",
  ".tif",
  ".tiff",
  ".ico",
  ".svg",
] as const;

const EXTENSION_SET = new Set(
  PORTRAIT_IMAGE_EXTENSIONS.map((ext) => ext.toLowerCase()),
);

export function isPortraitImageFile(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase();
  return ext.length > 0 && EXTENSION_SET.has(ext);
}

export type PortraitImage = {
  src: string;
  alt: string;
  objectPosition: string;
  mobileObjectPosition: string;
};

function altFromFilename(filename: string, displayName: string): string {
  const base = path.basename(filename, path.extname(filename)).replace(/[-_]+/g, " ").trim();
  return base ? `${displayName} — ${base}` : displayName;
}

/**
 * Reads `public/javed/` at build/request time.
 * Accepts jpg, jpeg, png, gif, webp, avif, heic, bmp, tiff, svg, and similar formats.
 */
export function getPortraitImages(displayName: string): PortraitImage[] {
  const dir = path.join(process.cwd(), "public", PORTRAIT_FOLDER);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => {
      if (file.startsWith(".")) return false;
      const fullPath = path.join(dir, file);
      try {
        return fs.statSync(fullPath).isFile() && isPortraitImageFile(file);
      } catch {
        return false;
      }
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => ({
      src: `${PORTRAIT_PUBLIC_PATH}/${encodeURIComponent(filename)}`,
      alt: altFromFilename(filename, displayName),
      objectPosition: "50% 20%",
      mobileObjectPosition: "50% 22%",
    }));
}

export function getPrimaryPortraitSrc(displayName: string): string {
  return getPortraitImages(displayName)[0]?.src ?? `${PORTRAIT_PUBLIC_PATH}/javed.jpeg`;
}
