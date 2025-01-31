import Footer from "@/components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <body cz-shortcut-listen="false">
        <NavbarMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
