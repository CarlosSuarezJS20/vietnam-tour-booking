/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Cruise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cruise" DROP COLUMN "imageUrl",
ADD COLUMN     "isVisible" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "isVisible" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "TourImage" ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "CruiseImage" (
    "id" TEXT NOT NULL,
    "cruiseId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CruiseImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enquiry" (
    "id" TEXT NOT NULL,
    "tourType" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "cities" TEXT[],
    "departureDate" TEXT NOT NULL,
    "nights" INTEGER NOT NULL,
    "includeCruise" BOOLEAN NOT NULL,
    "extras" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "travellers" INTEGER NOT NULL,
    "contactPreference" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CruiseImage" ADD CONSTRAINT "CruiseImage_cruiseId_fkey" FOREIGN KEY ("cruiseId") REFERENCES "Cruise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
