"use client";
import "../app/globals.css";
import { useGlobal } from "../hooks/useGlobal";
import VersionTwoLayout from "../components/layouts/VersionTwo";
import VersionOneLayout from "../components/layouts/VersionOne";

export default function Home() {
  const settings = useGlobal();
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
