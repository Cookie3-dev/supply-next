import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = new PrismaClient({
  log: ["error"],
});

export const db = globalForPrisma.prisma ?? prisma;
