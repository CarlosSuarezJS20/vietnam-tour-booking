import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const tourIdsToDelete = [
  "614a2d15-01b8-4c6b-8626-c70a002fb5c8",
  "c5ee00ee-6311-4137-ae8e-d6ffa4199d86",
  "38fcdb79-bd55-4d6e-ba63-b597c4603882",
  "f9a52781-9c82-450a-81ff-04c9beb624ff",
  "916ef527-d3b0-4a5f-890f-f9963a52e54e",
  "f21ee80f-f3c4-4b73-a1e3-a2e4edb34129",
];

async function main() {
  console.log(`Deleting ${tourIdsToDelete.length} tours...`);

  for (const tourId of tourIdsToDelete) {
    try {
      const tour = await prisma.tour.findUnique({
        where: { id: tourId },
        include: { images: true },
      });

      if (!tour) {
        console.log(`❌ Tour ${tourId} not found`);
        continue;
      }

      // Delete tour images
      if (tour.images.length > 0) {
        await prisma.tourImage.deleteMany({
          where: { tourId },
        });
        console.log(`  Deleted ${tour.images.length} images`);
      }

      // Delete tour cities relationships
      await prisma.tourCity.deleteMany({
        where: { tourId },
      });

      // Delete tour categories relationships
      await prisma.tourCategoryOnTour.deleteMany({
        where: { tourId },
      });

      // Delete tour
      await prisma.tour.delete({
        where: { id: tourId },
      });

      console.log(`✅ Deleted tour: ${tour.title} (${tourId})`);
    } catch (error) {
      console.error(`❌ Error deleting tour ${tourId}:`, error);
    }
  }

  console.log("\nDone!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
