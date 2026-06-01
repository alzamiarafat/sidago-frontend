import Link from "next/link";

const h2Class =
  "font-saans text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-white md:text-2xl md:leading-tight";
const h3 = "mt-6 font-saans text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-white/80 first:mt-0 md:text-sm";
const p = "text-[0.9375rem] leading-[1.75] text-white/68 md:text-base md:leading-[1.8]";
const ul =
  "legal-policy-list list-none space-y-2.5 pl-0 text-[0.9375rem] leading-[1.65] text-white/68 md:text-base";
const linkClass =
  "font-medium text-[#D34C2D] underline decoration-[#D34C2D]/30 underline-offset-[0.18em] transition hover:text-[#e8664a]";

function renderBodyBlock(block, i) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={`nested-h2-${i}`} id={block.id} className={h2Class}>
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className={h3}>
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className={p}>
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className={ul}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "plink":
      return (
        <p key={i} className={p}>
          {block.before}
          <Link href={block.href} className={linkClass}>
            {block.linkText}
          </Link>
          {block.after}
        </p>
      );
    case "contact": {
      const { intro, lines } = block;
      return (
        <div
          key={i}
          className="mt-8 rounded-lg border border-white/[0.1] bg-white/[0.03] p-6 md:p-7"
        >
          {intro ? <p className={`${p} mb-4`}>{intro}</p> : null}
          <p className="text-xs font-semibold tracking-[0.2em] text-white/50">Sidago</p>
          <ul className="legal-policy-meta-list mt-4 list-none space-y-3 pl-0 text-sm text-white/72 md:text-base">
            {lines.map((line, j) => (
              <li key={j} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/38">
                  {line.label}
                </span>
                <a href={line.href} className={linkClass} rel="noopener noreferrer">
                  {line.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    default:
      return null;
  }
}

function partitionBlocks(blocks) {
  const parts = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === "hr") {
      parts.push({ kind: "divider", key: `hr-${i}` });
      i += 1;
      continue;
    }
    if (b.type === "h2") {
      const heading = b;
      const body = [];
      i += 1;
      while (i < blocks.length) {
        const n = blocks[i];
        if (n.type === "h2" || n.type === "hr") break;
        body.push(n);
        i += 1;
      }
      parts.push({
        kind: "section",
        key: heading.id || `section-${heading.text}`,
        heading,
        body,
      });
      continue;
    }
    parts.push({ kind: "orphan", key: `orphan-${i}`, block: b });
    i += 1;
  }
  return parts;
}

export default function LegalBlocksRenderer({ blocks }) {
  const parts = partitionBlocks(blocks);

  return (
    <div className="legal-policy-document min-w-0">
      <div className="flex flex-col">
        {parts.map((part) => {
          if (part.kind === "divider") {
            return (
              <div key={part.key} className="my-2 h-px w-full bg-white/[0.06]" aria-hidden />
            );
          }
          if (part.kind === "orphan") {
            return (
              <div key={part.key} className="py-4">
                {renderBodyBlock(part.block, 0)}
              </div>
            );
          }
          return (
            <section
              key={part.key}
              aria-labelledby={part.heading.id}
              className="scroll-mt-[calc(var(--header-height)+1rem)] border-b border-white/[0.06] py-12 first:pt-0 last:border-b-0 md:py-14"
            >
              <h2 id={part.heading.id} className={h2Class}>
                {part.heading.text}
              </h2>
              <div className="mt-6 max-w-none space-y-5 md:mt-8 md:space-y-6">
                {part.body.map((block, idx) => renderBodyBlock(block, idx))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
