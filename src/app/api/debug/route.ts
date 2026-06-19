import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ db: "ok", env: !!process.env.DATABASE_URL });
  } catch (err) {
    return NextResponse.json(
      { db: "error", env: !!process.env.DATABASE_URL, message: String(err) },
      { status: 500 }
    );
  }
}
