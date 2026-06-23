import VersionTwoLayout from "../components/layouts/VersionTwo";
import VersionOneLayout from "../components/layouts/VersionOne";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getGlobalSettings, getHomepage } from "../lib/api";


export default async function Home() {
  const [settings, homepage] = await Promise.all([
    getGlobalSettings(),
    getHomepage(),
  ]);

  if (!homepage && settings?.version?.label !== "v1") {
    return <CMSPageShell />;
  }

  return (
    <>
      {settings?.version?.label === "v1" ? (
        <VersionOneLayout settings={settings}></VersionOneLayout>
      ) : (
        <VersionTwoLayout
          settings={settings}
          homepage={homepage}
        ></VersionTwoLayout>
      )}
    </>
  );
}
