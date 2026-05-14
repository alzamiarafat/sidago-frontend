
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import ProcessImprovementView from "@/src/components/process-improvement/ProcessImprovementView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.processImprovement;

export default async function ProcessImprovementPage() {
  const settings = await getGlobalSettings();

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1"
          style={{ colorScheme: "dark" }}
        >
          <ProcessImprovementView />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
