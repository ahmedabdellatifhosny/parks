"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import NotFoundIcon from "./NotFoundIcon";
import { language } from "./[locale]/lang";
import "../styles/globals.scss";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!pathname.includes("ar") && !pathname.includes("en")) {
      router.replace(`/${language}${pathname}`);
    }
  }, [pathname, router]);
  if (pathname.includes("ar") || pathname.includes("en")) {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"
          />
          <title>Error 404</title>
        </head>
        <body>
          <div className="wrapper-404">
            <button
              onClick={() => {
                router.back();
              }}
            >
              <i className="fa-solid fa-angle-left"></i>
              الرجوع
            </button>
            <NotFoundIcon />
          </div>
        </body>
      </html>
    );
  }

  return null;
}
