
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import ProcessImprovementView from "@/src/components/process-improvement/ProcessImprovementView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.processImprovement;

export default async function ProcessImprovementPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("process-improvement"),
  ]);

  if (!content) {
    notFound();
  }

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1"
          style={{ colorScheme: "dark" }}
        >
          <ProcessImprovementView content={content} />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
