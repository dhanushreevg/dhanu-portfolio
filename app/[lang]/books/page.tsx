import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLink } from "@/components/arrow-link"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { books } from "@/lib/books"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return ["en"].map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/books", namespace: "pages.books" })
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="flex-1">
        <Container>
          <div className="px-6 py-16 md:px-10 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              Books
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-semibold tracking-[-0.02em] md:text-7xl">
              Writing books that make people think.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              Writing at the intersection of memory, identity, and ideas.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <div className="grid grid-cols-1 border-y border-line md:grid-cols-2">
            {books.map((book, i) => (
              <article
                key={book.slug}
                className={
                  "p-8 md:p-10 " +
                  (i > 0 ? "border-t border-line md:border-l md:border-t-0" : "")
                }
              >
                <div className="flex aspect-[3/4] max-w-sm flex-col justify-between border border-line bg-secondary/10 p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {book.status}
                  </p>
                  <h2 className="font-serif text-3xl leading-tight tracking-[-0.01em]">
                    {book.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {book.availability}
                  </p>
                </div>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {book.description}
                </p>
                <Link
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-block"
                >
                  <ArrowLink>{book.cta}</ArrowLink>
                </Link>
              </article>
            ))}
          </div>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                From the author
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                Why I write.
              </h2>
            </div>
            <div className="p-8 md:p-10">
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                [TODO] Add your author note — why you write, what drives the work,
                and what readers can expect from your books.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Follow along at{" "}
                <Link
                  href="https://instagram.com/sanjay_offl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-accent underline-offset-4"
                >
                  @sanjay_offl
                </Link>{" "}
                on Instagram for updates.
              </p>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
