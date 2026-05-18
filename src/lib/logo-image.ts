import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { siteConfig } from "@/lib/site";

let cachedDataUrl: string | null = null;

export async function getLogoDataUrl(): Promise<string> {
  if (cachedDataUrl) {
    return cachedDataUrl;
  }

  const filePath = join(process.cwd(), "public", siteConfig.logo.replace(/^\//, ""));
  const buffer = await readFile(filePath);
  cachedDataUrl = `data:image/png;base64,${buffer.toString("base64")}`;
  return cachedDataUrl;
}
