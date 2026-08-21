import { NextRequest, NextResponse } from "next/server";
import { resolveCountryByDomain } from "@/lib/countries";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;

  const tenant = resolveCountryByDomain(hostname);

  if (!tenant) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${tenant.slug}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/"],
};
