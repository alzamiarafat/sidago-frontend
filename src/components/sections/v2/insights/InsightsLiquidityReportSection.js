import Image from "next/image";

export default function InsightsLiquidityReportSection({
  imageSrc = "/images/sidago-lp-report.svg",
  imageAlt = "Liquidity report across pairs and venues",
}) {
  return (
    <section className="bg-gray-defi-charcoal text-gray-off-white">
      <div className="container flex flex-col gap-2xl py-block lg:gap-3xl">
        <div className="text-2xl lg:text-3xl">
          Track your liquidity
          <br />
          across{" "}
          <span className="text-green-dark">all pairs and venues</span>
        </div>
        <Image
          alt={imageAlt}
          loading="lazy"
          width={1152}
          height={1152}
          className="bevel bevel-[0.25rem] w-full object-cover"
          src={imageSrc}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
