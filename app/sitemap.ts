import type { MetadataRoute } from "next";
import { supportedLocales } from "../src/locales";
import { publicSections } from "../src/sections";
import { codexGuestPath } from "../src/guides/codex-guest";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return supportedLocales.flatMap((lang) =>
    [
      "",
      ...publicSections.map((section) => section + "/"),
      codexGuestPath + "/",
    ].map((path) => ({
      url: `https://0xbot.org/${lang}/${path}`,
    })),
  );
}
