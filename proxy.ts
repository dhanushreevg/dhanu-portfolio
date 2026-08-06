import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, isLocale } from "@/lib/i18n"

const legacyLocales = ["es", "pt"]

const deletedRoutes: Array<[prefix: string, target: string]> = [
  ["/events-sponsors", "/contact"],
  ["/work-with-us", "/contact"],
  ["/team", "/about"],
  ["/impact", "/projects"],
  ["/research", "/about"],
  ["/events", "/timeline"],
  ["/workshops", "/contact"],
  ["/claude-code", "/timeline"],
  ["/brand", "/about"],
  ["/blog", "/about"],
  ["/n8n", "/timeline"],
  ["/opencode", "/about"],
]

function deletedRouteTarget(path: string) {
  return deletedRoutes.find(
    ([prefix]) => path === prefix || path.startsWith(`${prefix}/`),
  )?.[1]
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split("/").filter(Boolean)[0]

  if (firstSegment && legacyLocales.includes(firstSegment)) {
    const rest = pathname.slice(firstSegment.length + 1)
    const url = request.nextUrl.clone()
    url.pathname = rest === "" ? `/${defaultLocale}` : `/${defaultLocale}${rest}`
    return NextResponse.redirect(url, 301)
  }

  const path =
    pathname === `/${defaultLocale}`
      ? "/"
      : pathname.startsWith(`/${defaultLocale}/`)
        ? pathname.slice(defaultLocale.length + 1)
        : pathname

  const target = deletedRouteTarget(path)
  if (target) {
    const url = request.nextUrl.clone()
    url.pathname =
      firstSegment && isLocale(firstSegment)
        ? `/${firstSegment}${target}`
        : `/${defaultLocale}${target}`
    return NextResponse.redirect(url, 301)
  }

  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|favicon.ico|icon.svg|apple-touch-icon.png|.*\\..*).*)",
  ],
}
