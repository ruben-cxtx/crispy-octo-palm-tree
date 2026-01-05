import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['es', 'en'], //languages supported
    defaultLocale: 'es' //default language
});

export const config = {
    // matcher to avoid the middleware running on static files or API
    matcher: ['/', '/(es|en)/:path*']
};
