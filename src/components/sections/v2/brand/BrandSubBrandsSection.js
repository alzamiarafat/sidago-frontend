import BrandSubBrandEventsCard from "@/src/components/sections/v2/brand/BrandSubBrandEventsCard";
import BrandSubBrandNodeCard from "@/src/components/sections/v2/brand/BrandSubBrandNodeCard";
import BrandSubBrandResearchCard from "@/src/components/sections/v2/brand/BrandSubBrandResearchCard";
import BrandSubBrandVenturesCard from "@/src/components/sections/v2/brand/BrandSubBrandVenturesCard";

export default function BrandSubBrandsSection() {
  return (
    <section className="bg-gray-defi-graphite">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="sub-brands"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Sub-brands
            </h2>
          </div>
          <hr className="border-[#006623]" />
        </div>
        <BrandSubBrandVenturesCard />
        <BrandSubBrandResearchCard />
        <BrandSubBrandEventsCard />
        <BrandSubBrandNodeCard />
      </div>
    </section>
  );
}
