import type { Metadata } from "next";
import "./globals.css";
import "../src/site.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://0xbot.org"),
  title: "0xbot — One API for Web3 services",
  description:
    "Connect your application or AI agent to Web3 providers through one consistent API. Built for provider choice, clear results and simple integration.",
  openGraph: {
    title: "0xbot — One API for Web3 services",
    description: "One interface. More possibilities.",
    type: "website",
  },
  twitter: { card: "summary", title: "0xbot — One API for Web3 services" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
