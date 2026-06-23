"use client";

import "./globals.css";
import AppStatusScreen, {
  SECONDARY_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/AppStatusScreen";

export default function GlobalError({ reset }) {
  return (
    <html lang="en" className="version-v2">
      <head>
        <link rel="stylesheet" href="/styles/style-v2.css" />
      </head>
      <body className="version-v2 antialiased">
        <AppStatusScreen
          code="500"
          eyebrow="Application error"
          title="Something went wrong"
          description="A critical error occurred. Please refresh the page or try again in a moment."
          showLogo
          secondaryAction={
            <button type="button" onClick={reset} className={SECONDARY_BUTTON_CLASS}>
              Try again
            </button>
          }
        />
      </body>
    </html>
  );
}
