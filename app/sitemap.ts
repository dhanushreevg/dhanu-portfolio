import type { MetadataRoute } from "next"

import { locales } from "@/lib/i18n"
import { indexablePaths, languageAlternates, localizedUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.flatMap((path) =>
    locales.map((locale) => ({
      url: localizedUrl(path, locale),
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: languageAlternates(path),
      },
    })),
  )
}
