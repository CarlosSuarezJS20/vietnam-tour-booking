"use client";

import { makeVar } from "@apollo/client";

export const sessionIdVar = makeVar<string | null>(null);

export async function initSession() {
  const res  = await fetch("/api/session");
  const data = await res.json();
  sessionIdVar(data.sessionId);
}
