import { PrismaClient } from "@/generated/prisma/client";
import { mockDeep, mockReset, type DeepMockProxy } from "jest-mock-extended";

export const prisma = mockDeep<PrismaClient>();

beforeEach(() => {
  mockReset(prisma);
});

export type MockPrismaClient = DeepMockProxy<PrismaClient>;
