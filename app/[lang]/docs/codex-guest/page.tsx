import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "../../../../src/Site";
import { supportedLocales, isLocale } from "../../../../src/locales";
import { CodexGuestGuide } from "../../../../src/guides/CodexGuestGuide";
import {
  codexGuestCopy,
  codexGuestPath,
} from "../../../../src/guides/codex-guest";

export const dynamicParams = false;
export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const p = codexGuestCopy[lang];
  return {
    title: `${p.title} · 0xbot`,
    description: p.intro,
    alternates: {
      canonical: `/${lang}/${codexGuestPath}/`,
      languages: {
        en: `/en/${codexGuestPath}/`,
        zh: `/zh/${codexGuestPath}/`,
        "x-default": `/en/${codexGuestPath}/`,
      },
    },
    openGraph: {
      title: p.title,
      description: p.intro,
      type: "article",
      url: `/${lang}/${codexGuestPath}/`,
      images: [],
    },
    twitter: {
      card: "summary",
      title: p.title,
      description: p.intro,
      images: [],
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
  const p = codexGuestCopy[lang];
  return (
    <Site lang={lang} section={codexGuestPath} title={p.title} intro={p.intro}>
      <CodexGuestGuide lang={lang} />
    </Site>
  );
}
