
import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LANGUAGES = ['en', 'vi'];
const DEFAULT_LANGUAGE = 'en'; 

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const hasLocale = SUPPORTED_LANGUAGES.some((lang) =>
        pathname.startsWith(`/${lang}`)
    );
    if (!hasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${DEFAULT_LANGUAGE}${pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
