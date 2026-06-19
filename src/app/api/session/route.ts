import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { SessionData } from "@/lib/session";
import { sessionOptions } from "@/lib/session";

export async function GET() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

  if (!session.sessionId) {
    session.sessionId = crypto.randomUUID();
    await session.save();
  }

  return NextResponse.json({ sessionId: session.sessionId });
}
