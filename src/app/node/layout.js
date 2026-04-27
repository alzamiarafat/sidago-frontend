import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.node;

export default function NodeLayout({ children }) {
  return children;
}

