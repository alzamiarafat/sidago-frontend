import "../app/globals.css";
import VersionTwoLayout from "../components/layouts/VersionTwo";
import VersionOneLayout from "../components/layouts/VersionOne";
import { getGlobalSettings } from "../lib/api";

export default async function Home() {
  const settings = await getGlobalSettings();

  return (
    <>
      {settings?.version?.label === "v1" ? (
        <VersionOneLayout settings={settings}></VersionOneLayout>
      ) : (
        <VersionTwoLayout settings={settings}></VersionTwoLayout>
      )}
    </>
  );
}
