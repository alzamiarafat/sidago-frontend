import { routeMetadata } from "@/src/lib/seo";
import { redirect } from "next/navigation";

export const metadata = routeMetadata.strategy;


export default async function Strategy() {
  redirect("/strategy/capabilities");
}
