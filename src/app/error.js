"use client";

import AppStatusScreen, {
  SECONDARY_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/AppStatusScreen";
import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import { useGlobal } from "@/src/hooks/useGlobal";

export default function Error({ error, reset }) {
  const settings = useGlobal();

  const content = (
    <AppStatusScreen
      code="500"
      eyebrow="Something went wrong"
      title="We hit an unexpected error"
      description="An issue occurred while loading this page. You can try again, or return to the homepage."
      className={settings ? "min-h-[calc(100svh-var(--header-height))]" : undefined}
      showLogo={!settings}
      secondaryAction={
        <button type="button" onClick={reset} className={SECONDARY_BUTTON_CLASS}>
          Try again
        </button>
      }
    />
  );

  if (!settings) {
    return content;
  }

  return (
    <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        {content}
        <PageFooter footer={settings.footer} />
      </div>
    </div>
  );
}
