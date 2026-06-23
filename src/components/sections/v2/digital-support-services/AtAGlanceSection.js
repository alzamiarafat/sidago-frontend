import Image from "next/image";
import Link from "next/link";

function AtAGlanceBullets({ bullets }) {
  if (!bullets?.length) {
    return null;
  }

  return (
    <div className="pb-2xl">
      <ul>
        {bullets.map((item, index) => {
          if (typeof item === "string") {
            return (
              <li key={index} className="[&_a]:text-green-tradfi">
                {item}
              </li>
            );
          }

          return (
            <li key={index} className="[&_a]:text-green-tradfi">
              {item.before}
              {item.emphasis ? <strong>{item.emphasis}</strong> : null}
              {item.after}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function AtAGlanceSection({
  authorName,
  authorImageSrc,
  authorImageAlt,
  authorImageClassName,
  authorImageWrapperClassName,
  authorImageUnoptimized,
  tags,
  heading,
  headingId,
  body,
  bullets,
  sectionClassName = "bg-[#D8DAD8]",
  className = "",
}) {
  if (!heading) {
    return null;
  }

  return (
    <section className={`${sectionClassName} text-black ${className}`.trim()}>
      <div className="container flex flex-col gap-x-container gap-y-4xl py-block pb-container pt-container lg:flex-row">
        <div
          className="core-column--stacked-on-mobile flex flex-col gap-2xl"
          style={{ "--core-column-width": "33.33%" }}
        >
          <div className="flex items-center gap-4">
            {authorImageSrc?.includes("navbar-logo-icon.png") ? (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-tradfi-steel bg-black p-px">
                <Image
                  alt={authorImageAlt || authorName}
                  src={authorImageSrc}
                  width={560}
                  height={446}
                  unoptimized
                  className="h-full w-full object-contain [color:transparent]"
                />
              </div>
            ) : (
              <div
                className={`relative h-[2.625rem] w-[2.625rem] shrink-0 overflow-hidden rounded-full ${authorImageWrapperClassName || ""}`.trim()}
              >
                <Image
                  alt={authorImageAlt || authorName}
                  src={authorImageSrc}
                  width={96}
                  height={96}
                  unoptimized={Boolean(authorImageUnoptimized)}
                  className={
                    authorImageClassName || "h-full w-full object-cover"
                  }
                />
              </div>
            )}
            <p className="font-blender uppercase text-black">{authorName}</p>
          </div>

          {tags?.length > 0 ? (
            <div className="flex flex-wrap gap-5 font-blender">
              {tags.map((tag) => (
                <Link
                  key={tag.href}
                  href={tag.href}
                  style={{ position: "relative" }}
                  className="text-black"
                >
                  <span className="sr-only">{tag.srText || tag.label}</span>
                  <div className="bevel bevel-2 flex cursor-pointer items-center justify-center bg-gray-tradfi-horizon p-4 uppercase transition-colors hover:bg-gray-tradfi-silver">
                    {tag.label}
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <article
          className="post-body-container core-column--stacked-on-mobile text-lg leading-[1.6] text-black"
          style={{ "--core-column-width": "66.66%" }}
        >
          <div>
            <div className="mb-3xl flex flex-col gap-xl">
              <div className="flex flex-col gap-xs">
                <h2
                  id={headingId}
                  className="font-blender text-xl uppercase text-black"
                >
                  {heading}
                </h2>
              </div>
              <hr className="border-gray-tradfi-steel" />
            </div>
            {bullets?.length > 0 ? (
              <AtAGlanceBullets bullets={bullets} />
            ) : body ? (
              <p className="my-xl text-black [&_a]:text-green-tradfi">{body}</p>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
