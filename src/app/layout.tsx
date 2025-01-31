import Footer from "@/components/layout/Footer";
import NavbarMenu from "@/components/layout/NavbarMenu";
import "../styles/globals.scss";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Parks",
  description: "Parks website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
  }
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css"
        />
      </head>
      <body cz-shortcut-listen="false">
        <NavbarMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
