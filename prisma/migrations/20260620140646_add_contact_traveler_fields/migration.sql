/*
  Warnings:

  - Added the required column `contactEmail` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactFirstName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactLastName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerFirstName` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerLastName` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactFirstName" TEXT NOT NULL,
ADD COLUMN     "contactLastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "travelerFirstName" TEXT NOT NULL,
ADD COLUMN     "travelerLastName" TEXT NOT NULL;
