import PerformanceViewsCarousel from "@/src/components/sections/v2/performancepage/PerformanceViewsCarousel";

export default function SidagoPerformanceCarousel({ section }) {
  if (!section) {
    return null;
  }

  return <PerformanceViewsCarousel section={section} />;
}
