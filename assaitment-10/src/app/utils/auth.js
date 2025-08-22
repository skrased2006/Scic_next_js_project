import { getServerSession } from "next-auth/next";
import { handler as authHandler } from "@/app/api/auth/[...nextauth]/route";

export async function requireAuth() {
  const session = await getServerSession(authHandler);
  if (!session) return null;
  return session;
}
