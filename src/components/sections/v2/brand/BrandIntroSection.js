import Image from "next/image";
import { defaultBrandPage } from "@/src/data/cms/brand-page.mjs";

export default function BrandIntroSection({
  content = defaultBrandPage.pageContent.intro,
}) {
  return (
    <section>
      <div className="container py-block">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2
              className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
              id="sidago-brand"
            >
              Sidago <span className="text-green-dark">{content.titleHighlight}</span>
            </h2>
            <div className="z-10 max-w-[85%] md:max-w-[70%]">
              {content.description}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[40%] items-center justify-end md:w-[32%] lg:w-[22%]">
            <Image
              alt={content.imageAlt}
              src={content.imageSrc}
              width={560}
              height={446}
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
