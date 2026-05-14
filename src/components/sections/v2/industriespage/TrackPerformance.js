import Image from "next/image";

export default function TrackPerformance() {
  return (
    <section class="bg-gray-defi-charcoal text-gray-off-white">
      <div class="container py-block flex flex-col gap-2xl lg:gap-3xl">
        <div class="text-2xl lg:text-3xl">
          Track your liquidity <br></br> across
          <span class="text-green-dark"> all pairs and venues</span>
        </div>
        <Image
          alt=""
          loading="lazy"
          width={1152}
          height={1152}
          className="w-full object-cover bevel bevel-[0.25rem]"
          style={{ color: "transparent" }}
          src="/images/report.png"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
