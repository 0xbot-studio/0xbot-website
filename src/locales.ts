export const supportedLocales = ["en", "zh"] as const;
export const defaultLocale = "en";
export type Locale = (typeof supportedLocales)[number];
export function isLocale(value: string): value is Locale {
  return supportedLocales.some((locale) => locale === value);
}
