import LinkTitleWithArrow from "@/src/components/sections/v2/common/LinkTitleWithArrow";
import { defaultHomepage } from "@/src/data/cms/defaults";
function CTAItem({ item, isLast }) {
  return (
    <>
      <a
        style={{ position: "relative" }}
        className="group/interactive flex-1"
        href={item.href}
        aria-label={item.srLabel}
      >
        <div
          className="flex h-full flex-col gap-sm px-md py-md lg:px-md lg:py-xl"
          style={{ backgroundColor: item.backgroundColor }}
        >
          <LinkTitleWithArrow
            title={item.title}
            textClassName="text-xl font-medium leading-snug lg:text-xl group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100"
            arrowClassName="text-gray-night-green"
          />
          <div className="font-blender text-sm uppercase group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
            {item.description}
          </div>
        </div>
      </a>
      {!isLast && (
        <div className="hidden -mx-[0.0625rem] w-[0.125rem] lg:my-xl lg:block"></div>
      )}
    </>
  );
}
export default function CTASection({ items = defaultHomepage.cta }) {
  const ctaItems = items?.filter((item) => item?.title && item?.href) || [];
  if (ctaItems.length === 0) {
    return null;
  }
  return (
    <section className="relative bg-gray-night-green text-gray-night-green">
      <div className="absolute inset-0 flex">
        <div
          className="flex-1"
          style={{ backgroundColor: ctaItems[0]?.backgroundColor || "#FF5D3C" }}
        ></div>
        <div
          className="flex-1"
          style={{
            backgroundColor:
              ctaItems[ctaItems.length - 1]?.backgroundColor || "#FF8C69",
          }}
        ></div>
      </div>
      <div className="relative z-10 flex flex-col lg:container lg:flex-row">
        {ctaItems.map((item, index) => (
          <CTAItem
            key={`${item.title}-${index}`}
            item={item}
            isLast={index === ctaItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
