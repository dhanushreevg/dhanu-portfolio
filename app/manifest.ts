import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sanjay S | Portfolio",
    short_name: "Sanjay S",
    description:
      "Software Developer, AI Builder, Full Stack Developer, Founder, and Innovation Enthusiast.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/sanjay-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/sanjay-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/sanjay-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
