import { NextRequest, NextResponse } from "next/server";

const locales = ["es-MX", "en-US"];

function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return locales[0];

  const preferred = acceptLang
    .split(",")
    .map((lang) => lang.split(";")[0].trim());
  const match = preferred.find((lang) => locales.includes(lang));
  return match || locales[0];
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith("/index.html")) {
    return NextResponse.redirect(new URL(`/`, request.url), 301);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|assets|robots.txt|sitemap.xml|favicon.ico).*)"],
};
