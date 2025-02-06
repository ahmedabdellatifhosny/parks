import { NextIntlClientProvider } from "next-intl";

import NavbarMenu from "@/components/layout/NavbarMenu";
import Footer from "@/components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.scss";

interface Params {
  locale: string;
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  let messages: Record<string, string> = {}; // Initialize with an empty object

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
  }

  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css"
        />
      </head>
      <body dir={locale === "ar" ? "rtl" : "ltr"} className={locale === "ar" ? "rtl" : "ltr"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavbarMenu />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
