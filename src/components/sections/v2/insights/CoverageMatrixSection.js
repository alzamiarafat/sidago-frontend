import { coverageMatrixArt } from "./CoverageMatrixLogos";

export default function CoverageMatrixSection({ section }) {
  const items = section?.items?.length > 0 ? section.items : [];

  return (
    <section className="bg-gray-night-green text-gray-off-white">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex w-full max-w-4xl flex-col gap-md">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {section?.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-gray-tradfi-silver lg:text-lg">
              {section?.subtitle}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {items.map((item, index) => {
            const art = coverageMatrixArt[index % coverageMatrixArt.length];
            const Logo = art.Logo;

            return (
              <article
                key={`${item.title}-${index}`}
                className="group flex flex-col bg-[#1C211E] transition-colors duration-300 hover:bg-[#232924] bevel overflow-hidden [--bevel-size:0.625rem]"
              >
                <div
                  className={`relative flex h-[12.5rem] items-center justify-center overflow-hidden border-b border-white/[0.05] p-7 ${art.logoBoxClass}`}
                >
                  <Logo />
                </div>

                <div className="bg-[#1C211E] px-[1.625rem] pb-7 pt-[1.375rem] transition-colors duration-300 group-hover:bg-[#232924]">
                  <div className="font-blender text-[0.625rem] font-bold uppercase tracking-[0.16em] text-green-dark">
                    {item.title}
                  </div>
                  <p className="mt-2.5 text-[0.8125rem] leading-[1.7] text-gray-tradfi-silver">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
