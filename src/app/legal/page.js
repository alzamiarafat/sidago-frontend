import Link from "next/link";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalPolicies;

const docs = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    blurb: "Collection, use, sharing, international transfers, retention, security, and your choices.",
  },
  {
    href: "/cookies",
    title: "Cookies Policy",
    blurb: "Necessary, functional, analytics, and advertising technologies—and how to manage them.",
  },
  {
    href: "/modern-slavery",
    title: "Modern Slavery Statement",
    blurb: "Ethical conduct, supplier expectations, risk assessment, diligence, and reporting.",
  },
];

export default function LegalPoliciesHubPage() {
  return (
    <div className="min-h-[50vh]">
      <header className="relative border-b border-white/[0.08] bg-[#1C211E]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(211,76,45,0.06)_0%,transparent_45%)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/35">SIDAGO</p>
          <h1 className="mt-4 max-w-2xl font-saans text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
            Legal &amp; compliance center
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
            Website-ready policies for sidago.com. Last updated{" "}
            <time dateTime="2026-05-14" className="text-white/70">
              14 May 2026
            </time>
            .
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {docs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group flex flex-col border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-[#D34C2D]/45 hover:bg-white/[0.04] md:p-7"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#D34C2D]">Document</span>
              <span className="mt-3 font-saans text-lg font-semibold text-white md:text-xl">{doc.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{doc.blurb}</span>
              <span className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/40 transition group-hover:text-[#D34C2D]">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
