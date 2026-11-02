import { Site } from "../../src/Site";
import { notFound } from "next/navigation";
import { supportedLocales, isLocale } from "../../src/locales";
export const dynamicParams = false;
export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return {
    title:
      lang === "zh"
        ? "0xbot — 一个接口，连接 Web3 服务"
        : "0xbot — One API for Web3 services",
    description:
      lang === "zh"
        ? "标准化 Web3 服务接口，让开发者和 AI 自由选择 Provider。"
        : "Standardized Web3 APIs for developers and AI agents.",
    alternates: {
      canonical: `/${lang}/`,
      languages: { en: "/en/", zh: "/zh/", "x-default": "/en/" },
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <Site lang={lang} section="home" />;
}
