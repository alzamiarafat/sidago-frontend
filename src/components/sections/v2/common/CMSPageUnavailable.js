"use client";

import { useRouter } from "next/navigation";
import AppStatusScreen, {
  SECONDARY_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/AppStatusScreen";

export default function CMSPageUnavailable({ className = "" }) {
  const router = useRouter();

  return (
    <AppStatusScreen
      code="503"
      eyebrow="Loading issue"
      title="Content is taking longer to load"
      description="The connection to our CMS was slow on the first request. Tap try again — the page should load immediately."
      className={className}
      secondaryAction={
        <button
          type="button"
          onClick={() => router.refresh()}
          className={SECONDARY_BUTTON_CLASS}
        >
          Try again
        </button>
      }
    />
  );
}
