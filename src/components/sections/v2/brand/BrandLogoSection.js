import BrandDownloadLink from "@/src/components/sections/v2/brand/BrandDownloadLink";
import BrandLogoCarousel from "@/src/components/sections/v2/brand/BrandLogoCarousel";

export default function BrandLogoSection() {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="logo"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Logo
            </h2>
            <div className="text-gray-off-white">
              Our logo, a stylised 'W', deliberately invites interpretation
            </div>
          </div>
          <hr className="!border-[#AB290D]" />
        </div>
        <BrandLogoCarousel />
        <div className="pt-container flex">
          <BrandDownloadLink
            href="https://docsend.com/view/vpn4kstcxxbj7tyt"
            srLabel="View › Vpn4kstcxxbj7tyt"
          >
            Download logos
          </BrandDownloadLink>
        </div>
      </div>
    </section>
  );
}
