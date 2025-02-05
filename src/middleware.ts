import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ar', 'en'],  // Define your available locales
  defaultLocale: 'ar',    // Set the default locale
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],  // Match all paths except for API and static files
};
