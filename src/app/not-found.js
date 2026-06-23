import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import AppStatusScreen from "@/src/components/sections/v2/common/AppStatusScreen";
import { getGlobalSettings } from "@/src/lib/api";

export default async function NotFound() {
  const settings = await getGlobalSettings();

  if (!settings) {
    return (
      <AppStatusScreen
        code="404"
        eyebrow="Page not found"
        title="This page doesn't exist"
        description="We couldn't find what you were looking for. It may have moved or the address might be incorrect."
        showLogo
      />
    );
  }

  return (
    <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <AppStatusScreen
          code="404"
          eyebrow="Page not found"
          title="This page doesn't exist"
          description="We couldn't find what you were looking for. It may have moved, the link might be out of date, or the content hasn't been published yet."
          className="min-h-[calc(100svh-var(--header-height))]"
        />
        <Footer footer={settings.footer} />
      </div>
    </div>
  );
}
