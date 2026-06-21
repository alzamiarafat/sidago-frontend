import { defaultBrandPage } from "@/src/data/cms/brand-page.mjs";

export default function BrandColorIntroSection({
  content = defaultBrandPage.pageContent.colorIntro,
}) {
  return (
    <section className="bg-gray-night-green text-gray-off-white">
      <div className="container py-block pt-4xl pb-xl">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2
              className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
              id="color-system"
            >
              {content.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
