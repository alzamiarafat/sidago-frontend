import Image from "next/image";
import CareersLifeStatsSection from "@/src/components/sections/v2/careers/CareersLifeStatsSection";

/**
 * “Wintermute life” block: heading, copy, decor image, office video, dot-matrix stats.
 */
export default function CareersLifeSection({
  lead = "Wintermute",
  highlight = "life",
  headingId = "wintermute-life",
  description,
  decorImage,
  video,
  statsSection,
  className = "bg-gray-defi-shadow",
  titleClassName = "z-10 inline-block max-w-[60%] text-2xl text-white lg:text-3xl",
  highlightClassName = "text-green-dark",
  descriptionClassName = "z-10 max-w-[85%] text-white md:max-w-[70%]",
  decorClassName = "absolute -top-block right-0 w-[50%] md:w-[40%] lg:w-[28%]",
  videoClassName = "bevel w-full",
}) {
  const decorSrc = decorImage?.src;
  const videoSrc = video?.src;

  return (
    <section className={className}>
      <div className="container py-block">
        <div className="pb-container">
          <div className="relative">
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
            {decorSrc ? (
              <Image
                alt={decorImage.alt ?? `${lead} ${highlight}`}
                src={decorSrc}
                width={decorImage.width ?? 1152}
                height={decorImage.height ?? 1152}
                unoptimized
                className={decorClassName}
                style={{ color: "transparent" }}
              />
            ) : null}
          </div>
        </div>
        {videoSrc ? (
          <div className="pb-container">
            <video
              playsInline
              preload={video.preload ?? "metadata"}
              className={videoClassName}
              controls={video.controls !== false}
              poster={video.poster}
            >
              <source src={videoSrc} type={video.type ?? "video/mp4"} />
            </video>
          </div>
        ) : null}
        {statsSection?.items?.length ? (
          <CareersLifeStatsSection {...statsSection} />
        ) : null}
      </div>
    </section>
  );
}
