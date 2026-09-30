import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhanu Shree | Portfolio",
    short_name: "Dhanu Shree",
    description:
      "Aspiring AI/ML Engineer, Front-End Developer, and Computer Science student.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F9F9",
    theme_color: "#E42278",
    icons: [
      {
        src: "/og-image.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/og-image.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/og-image.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
