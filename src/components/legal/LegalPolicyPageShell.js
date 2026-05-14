import Link from "next/link";
import LegalBlocksRenderer from "@/src/components/legal/LegalBlocksRenderer";
import { tocFromBlocks } from "@/src/lib/legalTableOfContents";

const policyNav = [
  { id: "privacy", href: "/privacy", label: "Privacy" },
  { id: "cookies", href: "/cookies", label: "Cookies" },
  { id: "modern-slavery", href: "/modern-slavery", label: "Modern slavery" },
];

export default function LegalPolicyPageShell({ title, lastUpdated, blocks, activePolicy }) {
  const toc = tocFromBlocks(blocks);

  return (
    <>
      <header className="relative border-b border-white/[0.08] bg-[#1C211E]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(211,76,45,0.07)_0%,transparent_42%)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 max-w-3xl">
              <Link
                href="/legal"
                className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition hover:text-[#D34C2D]"
              >
                <span aria-hidden className="text-lg leading-none">
                  ←
                </span>
                All policies
              </Link>
              <h1 className="mt-5 font-saans text-[clamp(1.9rem,4.2vw,2.65rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                {title}
              </h1>
              {lastUpdated ? (
                <p className="mt-4 text-sm text-white/50">
                  <span className="text-white/35">Last updated</span>{" "}
                  <time dateTime="2026-05-14" className="text-white/70">
                    {lastUpdated}
                  </time>
                </p>
              ) : null}
            </div>
            <nav aria-label="Related policies" className="shrink-0">
              <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/35">
                Related
              </p>
              <div className="flex flex-wrap gap-2">
                {policyNav.map((item) => {
                  const isActive = activePolicy === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`rounded-md border px-3 py-2 text-center text-[0.7rem] font-medium uppercase tracking-[0.14em] transition md:min-w-[6.5rem] ${
                        isActive
                          ? "border-[#D34C2D] bg-[#D34C2D] text-white"
                          : "border-white/[0.12] bg-transparent text-white/55 hover:border-white/25 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {toc.length > 0 ? (
        <div className="border-b border-white/[0.06] bg-black/25 lg:hidden">
          <nav aria-label="On this page" className="mx-auto max-w-6xl px-4 py-3 md:px-8">
            <p className="mb-2 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-white/35">On this page</p>
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {toc.map((entry) => (
                <a
                  key={entry.id}
                  href={`#${entry.id}`}
                  className="shrink-0 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 transition hover:border-[#D34C2D]/40 hover:text-white"
                >
                  {entry.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_11.5rem] lg:gap-x-14 xl:grid-cols-[minmax(0,40rem)_12rem] xl:gap-x-20">
          <LegalBlocksRenderer blocks={blocks} />
          {toc.length > 0 ? (
            <aside className="mt-12 hidden lg:mt-0 lg:block">
              <div className="sticky top-[calc(var(--header-height)+1.5rem)] border-l border-white/[0.08] pl-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/35">On this page</p>
                <nav aria-label="Document sections" className="mt-4 flex flex-col gap-2.5">
                  {toc.map((entry) => (
                    <a
                      key={entry.id}
                      href={`#${entry.id}`}
                      className="text-left text-[0.8125rem] leading-snug text-white/55 transition hover:text-[#D34C2D]"
                    >
                      {entry.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </>
  );
}
