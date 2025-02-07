import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localeDetection: false, // Ensure browser preferences do not override your default
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Ensure it applies to all pages
};
