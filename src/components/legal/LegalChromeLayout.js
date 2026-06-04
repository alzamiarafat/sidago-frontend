
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import { getGlobalSettings } from "@/src/lib/api";

export default async function LegalChromeLayout({ children }) {
  const settings = await getGlobalSettings();

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative isolate flex-1 bg-[#1C211E] text-gray-off-white dark"
          style={{ colorScheme: "dark" }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(211,76,45,0.09),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_30%,rgba(0,0,0,0.35)_100%)]" />
          </div>
          <div className="relative z-[1]">{children}</div>
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
