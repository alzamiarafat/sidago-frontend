import ExecutionPageContent from "@/src/components/sections/v2/execution/ExecutionPageContent";
import { getExecutionPage } from "@/src/lib/api";

export default async function ExecutionPage() {
  const content = await getExecutionPage();

  return <ExecutionPageContent content={content} />;
}
