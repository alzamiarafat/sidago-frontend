import Link from "next/link";
import { FiShield } from "react-icons/fi";
import EventDecoration from "@/src/components/ui/EventDecoration";
import "./cards-grid-mobile.css";

const ArrowIcon = ({ size = "mobile", tone = "light" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    className={`ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] ${
      tone === "dark"
        ? "text-black/65 group-hover/interactive:text-black"
        : "text-white/65 group-hover/interactive:text-white"
    } ${size === "mobile" ? "lg:hidden" : "hidden lg:block"}`}
    style={{
      "--arrow-offset": size === "mobile" ? "0.85rem" : "1rem",
      width: size === "mobile" ? "2.25rem" : "2.75rem",
    }}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
      clipRule="evenodd"
    />
  </svg>
);

const NodeDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    className="pointer-events-none absolute -right-[6rem] -top-[9rem] w-[19rem] origin-top-left rotate-[24deg] text-white/25 lg:-right-[5rem] lg:-top-[8rem] lg:w-[22rem]"
  >
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.55" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.55" />
    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.55" />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 12;
      const cx = +(100 + 80 * Math.cos(angle)).toFixed(2);
      const cy = +(100 + 80 * Math.sin(angle)).toFixed(2);

      return (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="rgb(34 197 94 / 0.65)"
        />
      );
    })}
  </svg>
);

const ResearchDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    className="h-[3.5rem] w-[3.5rem] text-[#7dffc0] drop-shadow-[0_0_12px_rgba(102,255,168,0.35)] lg:h-[4.5rem] lg:w-[4.5rem]"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M38.724 20.735 20 1.987 1.243 20.727 20 39.483zm.837.276-19.28 19.305h-.561L.406 21.004v-.553L19.72 1.153h.56L39.562 20.46z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M33.382 34.117V7.337H6.594v26.78zm.396.787H6.203l-.397-.396V6.94l.391-.39h27.576l.396.396v27.567z"
      clipRule="evenodd"
    />
  </svg>
);

const MarketDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 201"
    fill="none"
    className="pointer-events-none absolute -right-[8rem] -top-[12rem] w-[26rem] origin-top-left text-white/22 lg:w-[28rem]"
    aria-hidden="true"
  >
    {[...Array(8)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 45} 100 100)`}>
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke="currentColor"
          strokeWidth="0.55"
          opacity="0.85"
        />
      </g>
    ))}
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.55" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.55" />
    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.55" />
  </svg>
);

function resolveDecoration(type) {
  if (type === "node" || type === "business-processes") {
    return <NodeDecoration />;
  }

  if (type === "events") {
    return <EventDecoration />;
  }

  if (type === "market") {
    return <MarketDecoration />;
  }

  return null;
}

function resolveTop(type) {
  if (type === "research") {
    return <ResearchDecoration />;
  }

  return null;
}

const LEADING_ICON_MAP = {
  shield: FiShield,
};

function LeadingIcon({ type, tone = "light" }) {
  if (!type) {
    return null;
  }
  const Icon = LEADING_ICON_MAP[type];
  if (!Icon) {
    return null;
  }

  return (
    <span
      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset backdrop-blur-[2px] lg:h-16 lg:w-16 ${
        tone === "dark"
          ? "bg-black/[0.06] text-black/85 ring-black/[0.08]"
          : "bg-white/[0.06] text-white/85 ring-white/[0.08]"
      }`}
      aria-hidden
    >
      <Icon className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={1.35} />
    </span>
  );
}

const LIGHT_CARD_THEME = {
  textClass: "text-black",
  titleClass: "text-black",
  subtitleClass: "text-black/60",
  arrowTone: "dark",
  ringClass: "ring-black/[0.08]",
};

const CARD_THEMES = {
  "research-data": {
    ...LIGHT_CARD_THEME,
    bgClass: "bg-[#EC9B9B]",
  },
  "marketing-growth": {
    ...LIGHT_CARD_THEME,
    bgClass: "bg-[#AEA9EA]",
  },
  "support-compliance": {
    ...LIGHT_CARD_THEME,
    bgClass: "bg-[#7FB2F1]",
  },
  "process-improvement": {
    bgClass: "bg-[#333935]",
    textClass: "text-white",
    titleClass: "text-white",
    subtitleClass: "text-white/50",
    arrowTone: "light",
    ringClass: "ring-white/[0.06]",
  },
};

function resolveCardTheme(card) {
  const themed = CARD_THEMES[card.cardId];
  if (themed) {
    return themed;
  }

  return {
    bgClass: card.bgClass,
    textClass: card.textClass,
    titleClass: "text-white",
    subtitleClass: "text-white/50",
    arrowTone: "light",
    ringClass: "ring-white/[0.06]",
  };
}

function Card({ card }) {
  const theme = resolveCardTheme(card);
  return (
    <Link
      href={card.href}
      style={{ position: "relative" }}
      className={`homepage-card group/interactive pointer-events-auto min-h-[14.5rem] transition-[opacity,transform] duration-300 lg:min-h-[17.5rem] lg:group-hover/cards:[&:not(:hover)]:opacity-55 ${card.colSpan}`}
    >
      <span className="sr-only">{card.srLabel}</span>

      <div
        className={`homepage-card-inner relative flex h-full min-h-[inherit] flex-col justify-between overflow-hidden p-6 bevel ring-1 ring-inset transition-[box-shadow,filter] duration-300 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_42%)] after:opacity-0 after:transition-opacity after:duration-300 group-hover/interactive:after:opacity-100 lg:p-8 ${theme.bgClass} ${theme.textClass} ${theme.ringClass} group-hover/interactive:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_24px_48px_rgba(0,0,0,0.45)]`}
      >
        {resolveDecoration(card.decorationType)}
        <div className="relative z-[1] flex min-h-[4.25rem] shrink-0 items-start pt-1">
          {resolveTop(card.topType) ?? (
            <LeadingIcon type={card.leadingIcon} tone={theme.arrowTone} />
          )}
        </div>

        <div className="relative z-10 mt-auto flex items-end justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-2">
            <div
              className={`homepage-card-title text-[1.35rem] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[1.6rem] xl:text-[1.7rem] ${theme.titleClass}`}
            >
              {card.title}
            </div>
            {card.subtitle ? (
              <div
                className={`homepage-card-subtitle max-w-[22rem] text-sm leading-relaxed lg:text-[0.95rem] ${theme.subtitleClass}`}
              >
                {card.subtitle}
              </div>
            ) : null}
          </div>

          <div className="shrink-0 self-end pb-0.5">
            <ArrowIcon size="mobile" tone={theme.arrowTone} />
            <ArrowIcon size="desktop" tone={theme.arrowTone} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CardsGrid({ items = [] }) {
  const cards =
    items?.filter((item) => item?.cardId && item?.href && item?.title) || [];

  if (cards.length === 0) {
    return null;
  }

  return (
    <section className="homepage-cards-section bg-transparent text-white">
      <div className="homepage-cards-container container py-12 md:py-20 lg:py-28">
        <div className="homepage-cards-grid group/cards pointer-events-none relative flex flex-col gap-3 bg-transparent lg:grid lg:grid-cols-12 lg:gap-px lg:p-px">
          {cards.map((card) => (
            <Card key={card.cardId} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
