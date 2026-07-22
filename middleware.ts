import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ur', 'ar', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(en|ur|ar|es)/:path*']
};
