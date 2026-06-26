
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import ProcessImprovementView from "@/src/components/process-improvement/ProcessImprovementView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.processImprovement;


export default async function ProcessImprovementPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("process-improvement"),
  ]);

  if (!content) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
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
          <PageFooter footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
