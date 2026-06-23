
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import CoverageMatrixSection from "@/src/components/sections/v2/insights/CoverageMatrixSection";
import { Discover } from "@/src/components/sections/v2/insights/Discover";
import "@/src/components/sections/v2/insights/insights-hero-mobile.css";
import { getGlobalSettings, getInsightsPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import CMSPageUnavailable from "@/src/components/sections/v2/common/CMSPageUnavailable";

export const dynamic = "force-dynamic";

export const metadata = routeMetadata.insights;

const benefitIcons = [
  {
    svgPath: (
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.7"
        d="M36 12.571V4h-8.571zM36 4 21.714 18.286M4 4v8.571L12.571 4zM18.286 18.286 4 4M27.429 36h8.57v-8.571zM36 36 21.714 21.714M12.571 36H4v-8.571zM4 36l14.286-14.286"
      />
    ),
    viewBox: "0 0 40 40",
  },
  {
    svgPath: (
      <path
        stroke="currentColor"
        d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
      />
    ),
    viewBox: "0 0 18 18",
  },
  {
    svgPath: (
      <>
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M30.429 5H9v30h21.429z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M26.143 9.286H13.286v21.428h12.857z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M21.857 13.571h-4.285V26.43h4.285z"
        />
      </>
    ),
    viewBox: "0 0 40 40",
  },
  {
    svgPath: (
      <>
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="m13.367 18.101 4.367 4.367 8.734-13.1M14.47 26.813V35l5.457-2.728L25.387 35v-8.187"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M9 10.46 13.367 5h13.101l4.366 5.46v10.916l-4.366 5.458h-13.1L9 21.376z"
        />
      </>
    ),
    viewBox: "0 0 40 40",
  },
  {
    svgPath: (
      <>
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M13 16H9v8h4zM15 20h4v-4h-4v8M23 20h-2M25 16h-4v8h4M31 16v8l-4-8v8"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M13 28H9l-4-4v-8l4-4h14"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M13 26v4l2-2zM13 28h2M27 12h4l4 4v8l-4 4H17"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M27 14v-4l-2 2zM27 12h-2"
        />
      </>
    ),
    viewBox: "0 0 40 40",
  },
  {
    svgPath: (
      <>
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="m21.238 6 5.564 2.223 2.223 5.563-2.223 5.564-5.564 2.222-5.563-2.222-2.223-5.564 2.223-5.563zM13.452 26.024h13.35"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="m27.695 17.12 1.33-3.334-2.223-5.563L21.238 6l-5.563 2.223-2.223 5.563 1.337 3.334H9v17.014h22.254V17.12z"
        />
      </>
    ),
    viewBox: "0 0 40 40",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InsightBenefitsSection({ section }) {
  const items = section?.items?.length > 0 ? section.items : [];

  return (
    <section className="bg-gray-night-green text-gray-off-white">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex max-w-4xl flex-col gap-md">
            <h2
              id="insights-that-scale"
              className="font-blender text-xl uppercase text-green-dark"
            >
              {section?.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-gray-tradfi-silver lg:text-lg">
              {section?.subtitle}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="grid gap-xl lg:grid-cols-2">
          {items.map((benefit, index) => {
            const icon = benefitIcons[index] || benefitIcons[0];
            return (
            <article
              key={benefit.title}
              className="flex flex-row items-center gap-md bevel lg:gap-2xl lg:bg-gray-defi-charcoal lg:p-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox={icon.viewBox}
                className="h-[3.5rem] w-[3.5rem] shrink-0 text-purple-mid lg:h-[6.5rem] lg:w-[6.5rem]"
              >
                {icon.svgPath}
              </svg>
              <div>
                <h3 className="text-lg lg:text-xl">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-tradfi-silver">
                  {benefit.description}
                </p>
              </div>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}

function StudioRail({ section }) {
  const cards = section?.items?.length > 0 ? section.items : [];

  return (
    <section className="bg-gray-defi-shadow text-gray-off-white">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex max-w-4xl flex-col gap-md">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {section?.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-gray-tradfi-silver lg:text-lg">
              {section?.subtitle}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="grid gap-lg md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <a
              key={card.title}
              href="#"
              className="group/interactive relative flex min-h-[20rem] overflow-hidden bevel bg-gray-defi-charcoal p-lg transition-colors duration-300 hover:bg-[#202725] lg:p-xl"
              style={{
                "--card-accent": card.accent,
                position: "relative",
              }}
            >
              <div className="relative z-10 flex w-full flex-col">
                <div className="flex items-start justify-between gap-md">
                  <div className="font-blender text-xs uppercase tracking-[0.22em] text-green-dark">
                    {card.category}
                  </div>
                  <div
                    className="font-blender text-3xl leading-none opacity-80"
                    style={{ color: card.accent }}
                  >
                    {card.metric}
                  </div>
                </div>

                <div className="mt-auto border-t border-gray-defi-ash pt-lg">
                  <h3 className="max-w-[15rem] text-xl leading-tight lg:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-md text-sm leading-6 text-gray-tradfi-silver">
                    {card.description}
                  </p>
                </div>

                <div className="mt-lg flex flex-wrap gap-xs">
                  {card.services.map((service) => (
                    <span
                      key={service}
                      className="font-blender text-xs uppercase text-gray-tradfi-silver"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-lg flex items-center justify-between font-blender text-xs uppercase text-green-dark">
                  <span>Read insight</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover/interactive:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ section }) {
  const items = section?.items?.length > 0 ? section.items : [];

  return (
    <section
      id="timeline"
      className="bg-gray-defi-charcoal text-gray-off-white"
    >
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex max-w-4xl flex-col gap-md">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {section?.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-gray-tradfi-silver lg:text-lg">
              {section?.subtitle}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="grid gap-md">
          {items.map((item, index) => (
            <a
              key={item.title}
              href="#"
              className="group/interactive relative overflow-hidden rounded-[1.4rem] bg-[linear-gradient(180deg,#101510_0%,#0d120e_100%)] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(0,0,0,0.22)] lg:px-7 lg:py-6"
              style={{
                position: "relative",
                transitionDelay: `${index * 35}ms`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(171,41,14,0.08),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover/interactive:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(171,41,14,0.5),rgba(149,141,236,0.12),transparent)]" />
              <div className="absolute inset-y-5 left-0 w-px bg-[#958dec]/70" />
              <div className="grid gap-5 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-6">
                <div className="pl-4">
                  <span className="font-blender text-[0.72rem] uppercase tracking-[0.22em] text-green-dark">
                    {item.category}
                  </span>
                  <span className="mt-3 inline-flex rounded-full bg-white/[0.04] px-3 py-1 font-blender text-[0.68rem] uppercase tracking-[0.18em] text-gray-tradfi-silver/78">
                    {item.date}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="max-w-5xl text-[1.38rem] leading-[1.14] text-white transition-colors duration-500 group-hover/interactive:text-white/92 md:text-[1.72rem] lg:text-[1.9rem]">
                    {item.title}
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.03] text-green-dark transition-all duration-500 group-hover/interactive:translate-x-1 group-hover/interactive:bg-[#AB290E]/10 group-hover/interactive:text-[#d86b4a]">
                  <ArrowIcon className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function InsightPage() {
  const insightsPage = await getInsightsPage();
  const settings = await getGlobalSettings();

  if (!insightsPage?.hero) {
    return (
      <div className="flex min-h-svh flex-col text-base">
        <Navigation />
        <CMSPageUnavailable className="min-h-[calc(100svh-var(--header-height))]" />
      </div>
    );
  }

  const hero = {
    ...insightsPage.hero,
    videoClass:
      "insights-hero-video lg:left-[500px] lg:top-[70px] lg:!w-3/4 lg:!h-3/4",
    videoSectionClass: [
      "insights-hero-section",
      insightsPage.hero?.videoSectionClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            {...hero}
            ctaLabel={insightsPage.hero.ctaLabel || "Get in touch"}
            ctaHref={insightsPage.hero.ctaHref || "/contact"}
            ctaButtonClass={
              insightsPage.hero.ctaButtonClass ||
              "group/interactive mt-6 inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-[#958dec] px-md py-sm text-sm font-medium !text-black transition-opacity hover:!text-black hover:opacity-90"
            }
          />

          <Statistics stats={insightsPage.statistics} compact />
          <InsightBenefitsSection section={insightsPage.benefits} />
          <StudioRail section={insightsPage.featuredInsights} />
          <CoverageMatrixSection section={insightsPage.coverageMatrix} />
          <TimelineSection section={insightsPage.timeline} />
          <Discover section={insightsPage.discover} />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
