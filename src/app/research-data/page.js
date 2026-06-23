import ResearchDataView from "@/src/components/sections/v2/research-data/ResearchDataView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Research & Data",
  description:
    "Sidago Research & Data Center — reports, survey intelligence, and datasets for evidence-led decisions.",
  path: "/research-data",
});

export default async function ResearchDataPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("research-data"),
  ]);

  if (!content) {
    notFound();
  }

  return <ResearchDataView footer={settings?.footer} content={content} />;
}
