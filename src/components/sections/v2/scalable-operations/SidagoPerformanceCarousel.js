import PerformanceViewsCarousel from "@/src/components/sections/v2/performancepage/PerformanceViewsCarousel";
import { defaultPerformancePage } from "@/src/data/cms/defaults.mjs";

export default function SidagoPerformanceCarousel() {
  return (
    <PerformanceViewsCarousel
      section={defaultPerformancePage.imageCarouselSection}
    />
  );
}
