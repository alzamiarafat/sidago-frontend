// import "./globals.css";
// import "../styles/default.css";
// import "../styles/light.css";
// import "../styles/responsive.css";
// import "../styles/style_1.css";
// import "../styles/jquery-ui.css";
// import "../styles/style.min_2.css";
// import "../styles/js_composer.css";
// import "../styles/case-study-style.css";
import { getGlobalSiteSettings } from "../lib/cms";
import { GlobalProvider } from "../hooks/useGlobal";
import { SITE_NAME, SITE_URL, routeMetadata } from "../lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: routeMetadata.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: routeMetadata.home.description,
  applicationName: SITE_NAME,
  category: "business",
  keywords: routeMetadata.home.keywords,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: routeMetadata.home.openGraph,
  twitter: routeMetadata.home.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
// import localFont from "next/font/local";

// const blender = localFont({
//   src: [
//     {
//       path: "/fonts/blender_book-s.p.17e5766d.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "/fonts/blender_medium-s.p.f824e332.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   display: "swap",
// });


export default async function RootLayout({ children }) {
  const settings = await getGlobalSiteSettings();

  if (!settings) {
    return <div>No data found</div>;
  }

  const version = settings.version?.label;
  const versionCSS =
    version === "v1"
      ? [
          "./globals.css",
          "/styles/default.css",
          "/styles/light.css",
          "/styles/responsive.css",
          "/styles/style_1.css",
          "/styles/jquery-ui.css",
          "/styles/style.min_2.css",
          "/styles/js_composer.css",
          "/styles/case-study-style.css",
        ]
      : ["/styles/style-v2.css"];

  return (
    // <html lang="en" className={blender.className}>
    <html lang="en">
      <head>
        {/* Dynamic CSS based on version */}
        {versionCSS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className={`version-${version} antialiased`}>
        <GlobalProvider settings={settings}>{children}</GlobalProvider>
      </body>
    </html>
  );
}
