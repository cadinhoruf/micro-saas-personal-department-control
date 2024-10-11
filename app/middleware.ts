import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { extractTenant } from './utils'

export function middleware(request: NextRequest) {
  const tenantId = extractTenant(request)
  console.log(`Tenant ID: ${tenantId}`)
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
