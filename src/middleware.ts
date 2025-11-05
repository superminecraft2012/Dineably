import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Redirect non-www to www (optional - configure based on your preference)
  // Uncomment if you want to enforce www
  /*
  if (hostname === 'dineably.com') {
    url.host = 'www.dineably.com'
    return NextResponse.redirect(url, 301)
  }
  */

  // Or redirect www to non-www (currently preferred based on metadataBase)
  if (hostname === 'www.dineably.com') {
    url.host = 'dineably.com'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

