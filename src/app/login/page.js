import LoginView from "@/src/components/sections/v2/login/LoginView";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Log in",
  description: "Log in to your Sidago account.",
  path: "/login",
});

export default function LoginPage() {
  return <LoginView productName="Node" />;
}
