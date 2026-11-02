import { Site } from "../../../src/Site";
import { notFound } from "next/navigation";
import { supportedLocales, isLocale } from "../../../src/locales";
export const dynamicParams = false;
import { publicSections as sections } from "../../../src/sections";
export function generateStaticParams() {
  return supportedLocales.flatMap((lang) =>
    sections.map((section) => ({ lang, section })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; section: string }>;
}) {
  const { lang, section } = await params;
  if (!isLocale(lang) || !sections.includes(section)) notFound();
  const names: Record<string, string> = {
    capabilities: "Capabilities",
    providers: "Providers",
    pricing: "Pricing",
    docs: "Documentation",
    connect: "Connect your Agent",
  };
  const chineseNames: Record<string, string> = {
    capabilities: "能力目录",
    providers: "服务商",
    pricing: "价格",
    docs: "文档",
    connect: "连接你的 Agent",
  };
  return {
    title: `${(lang === "zh" ? chineseNames : names)[section] ?? "0xbot"} · 0xbot`,
    alternates: {
      canonical: `/${lang}/${section}/`,
      languages: {
        en: `/en/${section}/`,
        zh: `/zh/${section}/`,
        "x-default": `/en/${section}/`,
      },
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; section: string }>;
}) {
  const { lang, section } = await params;
  if (!isLocale(lang) || !sections.includes(section)) notFound();
  return <Site lang={lang} section={section} />;
}
