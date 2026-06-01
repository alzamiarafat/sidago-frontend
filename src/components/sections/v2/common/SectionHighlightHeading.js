/**
 * Section title with a highlighted trailing word (e.g. "Wintermute teams").
 */
export default function SectionHighlightHeading({
  lead,
  highlight,
  headingId,
  className = "bg-gray-defi-shadow",
  containerClassName = "container py-block flex flex-col gap-none pb-xl",
  titleClassName = "z-10 inline-block max-w-[60%] text-2xl lg:text-3xl text-white",
  highlightClassName = "text-green-dark",
}) {
  if (!lead && !highlight) {
    return null;
  }

  return (
    <section className={className}>
      <div className={containerClassName}>
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 id={headingId} className={titleClassName}>
              {lead ? <>{lead} </> : null}
              {highlight ? (
                <span className={highlightClassName}>{highlight}</span>
              ) : null}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
