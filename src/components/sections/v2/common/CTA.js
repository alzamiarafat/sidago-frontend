import Link from "next/link";
import { defaultHomepage } from "@/src/data/cms/defaults";

const SUBSCRIBE_CTA_HREF = "/insights/subscribe";
const APPLY_CTA_HREF = "/company/opportunities";

function resolveCtaHref(item) {
  const title = item?.title?.trim().toLowerCase();

  if (title === "subscribe") {
    return SUBSCRIBE_CTA_HREF;
  }

  if (title === "apply") {
    return APPLY_CTA_HREF;
  }

  return item?.href?.trim() || "";
}

function CTAItem({ item, isLast }) {
  const href = resolveCtaHref(item);
  const isExternal = /^https?:\/\//i.test(href);
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href };

  return (
    <>
      <Wrapper
        {...wrapperProps}
        style={{ position: "relative" }}
        className="group/interactive flex-1"
        aria-label={item.srLabel}
      >
        <div
          className="flex h-full flex-col gap-sm px-md py-md lg:px-md lg:py-xl"
          style={{ backgroundColor: item.backgroundColor }}
        >
          <div className="flex flex-1 items-center justify-between gap-xs">
            <div className="text-xl font-medium lg:text-xl group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
              {item.title}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
              className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] shrink-0 lg:hidden text-gray-night-green"
              style={{
                "--arrow-offset": "1rem",
                width: "2.5rem",
              }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
              className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] hidden shrink-0 lg:inline text-gray-night-green"
              style={{
                "--arrow-offset": "0.6rem",
                width: "1.5rem",
              }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="font-blender text-sm uppercase group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
            {item.description}
          </div>
        </div>
      </Wrapper>
      {!isLast && (
        <div className="hidden -mx-[0.0625rem] w-[0.125rem] lg:my-xl lg:block"></div>
      )}
    </>
  );
}
export default function CTASection({ items = defaultHomepage.cta }) {
  const ctaItems =
    items
      ?.map((item) => ({
        ...item,
        href: resolveCtaHref(item),
      }))
      .filter((item) => item?.title && item?.href) || [];
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
