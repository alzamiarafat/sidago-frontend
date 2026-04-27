import "../app/globals.css";
import VersionTwoLayout from "../components/layouts/VersionTwo";
import VersionOneLayout from "../components/layouts/VersionOne";
import { getContentPageBySlug, getGlobalSiteSettings } from "../lib/cms";

export default async function Home() {
  const settings = await getGlobalSiteSettings();
  const homePage = await getContentPageBySlug("home", "home");

  return (
    <>
      {settings?.version?.label === "v1" ? (
        <VersionOneLayout settings={settings}></VersionOneLayout>
      ) : (
        <VersionTwoLayout settings={settings} pageContent={homePage}></VersionTwoLayout>
      )}
    </>
  );
}
