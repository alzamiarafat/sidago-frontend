import Image from "next/image";
import "./who-we-serve-mobile.css";

export default function WhoWeServeIntroSection({
  intro,
  className = "",
}) {
  if (!intro?.lead || !intro?.watermark?.src) {
    return null;
  }

  return (
    <section className={`who-we-serve-intro-section ${className}`.trim()}>
      <div className="container py-block">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2
              className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
              id={intro.headingId}
            >
              {intro.lead}{" "}
              <span className="text-green-dark">{intro.highlight}</span>{" "}
              {intro.trailing}
            </h2>
            <div className="z-10 max-w-[85%] md:max-w-[70%]">
              {intro.description}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[40%] items-center justify-end md:w-[32%] lg:w-[22%]">
            <Image
              alt={intro.watermark.alt}
              src={intro.watermark.src}
              width={intro.watermark.width}
              height={intro.watermark.height}
              unoptimized
              className="h-auto w-full max-w-[9.5rem] sm:max-w-[10.5rem] md:max-w-[12rem] lg:max-w-[14rem]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
