import Image from "next/image";

export default function EventsIntroBlock({
  headingId,
  title,
  description,
  logoSrc,
  logoAlt,
  logoClassName = "pointer-events-none absolute -top-block right-0 w-[50%] md:w-[40%] lg:w-[28%]",
}) {
  return (
    <div className="pb-container">
      <div className="relative">
        <div className="flex flex-col gap-6 lg:gap-8">
          <h2
            id={headingId}
            className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
          >
            {title}
          </h2>
          {description ? (
            <div className="z-10 max-w-[85%] md:max-w-[70%]">{description}</div>
          ) : null}
        </div>
        {logoSrc ? (
          <div className={logoClassName} aria-hidden>
            <Image
              src={logoSrc}
              alt={logoAlt || ""}
              width={352}
              height={191}
              className="h-auto w-full"
              style={{ color: "transparent" }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
