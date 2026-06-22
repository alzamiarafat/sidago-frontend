import CareersLifeCultureStage from "@/src/components/sections/v2/careers/CareersLifeCultureStage";

const defaultStage = {
  label: "Culture orbit",
  footTitle: "Where teams actually connect",
  footDescription:
    "Sidago life isn't a slide — it's shared meals, clubs, offsites, and the informal rituals that keep global teams aligned without adding hierarchy.",
  pillars: [
    { label: "Shared meals", tone: "warm" },
    { label: "Game nights", tone: "hot" },
    { label: "Offsites", tone: "cool" },
    { label: "Interest clubs", tone: "glow" },
    { label: "Workshops", tone: "warm" },
    { label: "Mentorship", tone: "hot" },
  ],
  stats: [
    { value: 52, suffix: "", label: "events / year" },
    { value: 0, suffix: "", label: "hierarchy layers" },
    { value: 100, suffix: "%", label: "teams connected" },
  ],
};

/**
 * Sidago life block: heading + copy, with animated culture network stage.
 */
export default function CareersLifeSection({
  lead = "Sidago",
  highlight = "life",
  headingId = "sidago-life",
  description,
  stage = defaultStage,
  className = "bg-gray-defi-shadow",
  titleClassName = "z-10 inline-block max-w-[60%] text-2xl text-white lg:text-3xl",
  highlightClassName = "text-green-dark",
  descriptionClassName = "z-10 max-w-[85%] text-white md:max-w-[70%]",
}) {
  return (
    <section className={className} aria-labelledby={headingId}>
      <div className="container py-block">
        <div className="pb-container">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 id={headingId} className={titleClassName}>
              {lead ? <>{lead} </> : null}
              {highlight ? (
                <span className={highlightClassName}>{highlight}</span>
              ) : null}
            </h2>
            {description ? (
              <div className={descriptionClassName}>{description}</div>
            ) : null}
          </div>
        </div>

        <div className="pb-container pt-2 md:pt-4">
          <CareersLifeCultureStage
            label={stage.label ?? defaultStage.label}
            footTitle={stage.footTitle ?? defaultStage.footTitle}
            footDescription={
              stage.footDescription ?? defaultStage.footDescription
            }
            pillars={stage.pillars?.length ? stage.pillars : defaultStage.pillars}
            stats={stage.stats?.length ? stage.stats : defaultStage.stats}
          />
        </div>
      </div>
    </section>
  );
}
