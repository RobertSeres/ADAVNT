import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic in-memory rate limit store for edge
const rateLimitMap = new Map();

/**
 * Middleware for Rate Limiting and Security Headers
 */
export function middleware(request: NextRequest) {
  const ip = request.ip || 'anonymous';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 20;

  const userRequests = rateLimitMap.get(ip) || [];
  const recentRequests = userRequests.filter((time: number) => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  // Security Headers implementation
  const response = NextResponse.next();
  
  const securityHeaders = {
    // Content Security Policy
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google-analytics.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; frame-src 'self'; worker-src 'blob';",
    // Prevent DNS prefetching
    'X-DNS-Prefetch-Control': 'on',
    // HSTS
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    // Clickjacking protection
    'X-Frame-Options': 'SAMEORIGIN',
    // MIME sniffing protection
    'X-Content-Type-Options': 'nosniff',
    // Referrer Policy
    'Referrer-Policy': 'origin-when-cross-origin',
    // XSS filter
    'X-XSS-Protection': '1; mode=block',
  };

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
