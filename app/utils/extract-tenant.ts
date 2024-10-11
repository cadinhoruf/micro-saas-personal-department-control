'use client'
import { NextRequest } from "next/server";

export function extractTenant(req: NextRequest) {
  const host = req.nextUrl.host;
  const tenantId = host.split('.')[0];
  return tenantId;
}