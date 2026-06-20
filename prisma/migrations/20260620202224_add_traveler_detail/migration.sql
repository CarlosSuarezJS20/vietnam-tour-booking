/*
  Warnings:

  - You are about to drop the column `travelerFirstName` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `travelerLastName` on the `OrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "travelerFirstName",
DROP COLUMN "travelerLastName";

-- CreateTable
CREATE TABLE "TravelerDetail" (
    "id" TEXT NOT NULL,
    "orderItemId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "TravelerDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TravelerDetail" ADD CONSTRAINT "TravelerDetail_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
