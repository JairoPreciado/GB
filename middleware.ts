// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("token")?.value;

  const isLoginPage = req.nextUrl.pathname === "/admin/login";
  const isAdminPath = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminPath && !isLoginPage && !isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
