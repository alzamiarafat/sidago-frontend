"use client";

import { audienceSegments } from "./data";
import WhoWeServeAccordionItem from "./WhoWeServeAccordionItem";

export default function WhoWeServeAudienceSection({
  segments = audienceSegments,
  className = "bg-gray-defi-charcoal py-lg text-gray-off-white",
}) {
  return (
    <section className={className}>
      <div className="hidden w-full flex-col lg:flex">
        {segments.map((item, index) => (
          <WhoWeServeAccordionItem
            key={`desktop-${item.title}`}
            item={item}
            index={index}
            isLast={index === segments.length - 1}
            variant="desktop"
          />
        ))}
      </div>

      <div className="flex w-full flex-col lg:hidden">
        {segments.map((item, index) => (
          <WhoWeServeAccordionItem
            key={`mobile-${item.title}`}
            item={item}
            index={index}
            isLast={index === segments.length - 1}
            variant="mobile"
          />
        ))}
      </div>
    </section>
  );
}
