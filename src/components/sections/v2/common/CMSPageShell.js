import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CMSPageUnavailable from "@/src/components/sections/v2/common/CMSPageUnavailable";

export const CMS_UNAVAILABLE_CONTENT_CLASS =
  "min-h-[calc(100svh-var(--header-height))]";

export default function CMSPageShell({
  className = "flex min-h-svh flex-col bg-gray-night-green text-base",
  contentClassName = CMS_UNAVAILABLE_CONTENT_CLASS,
}) {
  return (
    <div className={className}>
      <Navigation />
      <CMSPageUnavailable className={contentClassName} />
    </div>
  );
}
