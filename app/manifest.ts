import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description.en,
    start_url: "/",
    display: "standalone",
    background_color: "#F9F9F9",
    theme_color: "#E42278",
    icons: [
      {
        src: siteConfig.ogImage.path,
        // meta-tag.png is 1672x941, so the previous square 192/512 claims were wrong.
        sizes: "1672x941",
        type: siteConfig.ogImage.type,
        purpose: "any",
      },
    ],
  }
}
