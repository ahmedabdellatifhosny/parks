import { notFound } from "next/navigation";
import { getRequestConfig, type RequestConfig } from "next-intl/server";
// import { locales, defaultLocale } from "./routing";
import { locales } from "./routing";

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return {};
});
