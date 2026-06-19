import type { SessionOptions } from "iron-session";

export interface SessionData {
  sessionId?: string;
}

export const sessionOptions: SessionOptions = {
  cookieName: "vtb_session",
  password:   process.env.SESSION_SECRET!,
  cookieOptions: {
    secure:   process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge:   60 * 60 * 24 * 30, // 30 days
  },
};
