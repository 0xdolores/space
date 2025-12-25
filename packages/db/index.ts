import { PrismaClient } from "./generated/prisma/client/client.js";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL as string,
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
