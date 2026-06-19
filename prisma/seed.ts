import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { tourCategories, regions, cities, tours, cruises } from "../src/data/db";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding tour categories...");
  for (const category of tourCategories) {
    await prisma.tourCategory.upsert({
      where:  { id: category.id },
      update: { slug: category.slug, label: category.label },
      create: { id: category.id, slug: category.slug, label: category.label },
    });
  }

  console.log("Seeding regions...");
  for (const region of regions) {
    await prisma.region.upsert({
      where:  { id: region.id },
      update: { key: region.key, label: region.label, image: region.image },
      create: { id: region.id, key: region.key, label: region.label, image: region.image },
    });
  }

  console.log("Seeding cities...");
  for (const city of cities) {
    await prisma.city.upsert({
      where:  { id: city.id },
      update: { name: city.name, regionId: city.regionId },
      create: { id: city.id, name: city.name, regionId: city.regionId },
    });
  }

  console.log("Seeding tours...");
  for (const tour of tours) {
    await prisma.tour.upsert({
      where:  { id: tour.id },
      update: {
        title:                  tour.title,
        description:            tour.description,
        itinerary:              tour.itinerary,
        duration:               tour.duration,
        price:                  tour.price,
        featuredTour:           tour.featuredTour,
        onSale:                 tour.onSale,
        saleDiscountPercentage: tour.saleDiscountPercentage ?? null,
      },
      create: {
        id:                     tour.id,
        title:                  tour.title,
        description:            tour.description,
        itinerary:              tour.itinerary,
        duration:               tour.duration,
        price:                  tour.price,
        featuredTour:           tour.featuredTour,
        onSale:                 tour.onSale,
        saleDiscountPercentage: tour.saleDiscountPercentage ?? null,
      },
    });

    // Hero image
    await prisma.tourImage.upsert({
      where:  { id: `img-${tour.id}` },
      update: { url: tour.imageUrl, position: 0 },
      create: { id: `img-${tour.id}`, tourId: tour.id, url: tour.imageUrl, position: 0 },
    });

    // City links
    for (const cityId of tour.cityIds) {
      await prisma.tourCity.upsert({
        where:  { tourId_cityId: { tourId: tour.id, cityId } },
        update: {},
        create: { tourId: tour.id, cityId },
      });
    }

    // Category links
    for (const categoryId of tour.categoryIds) {
      await prisma.tourCategoryOnTour.upsert({
        where:  { tourId_categoryId: { tourId: tour.id, categoryId } },
        update: {},
        create: { tourId: tour.id, categoryId },
      });
    }
  }

  console.log("Seeding cruises...");
  for (const cruise of cruises) {
    await prisma.cruise.upsert({
      where:  { id: cruise.id },
      update: {
        title:                  cruise.title,
        imageUrl:               cruise.imageUrl,
        description:            cruise.description,
        itinerary:              cruise.itinerary,
        duration:               cruise.duration,
        price:                  cruise.price,
        sourceUrl:              cruise.sourceUrl,
        onSale:                 cruise.onSale,
        saleDiscountPercentage: cruise.saleDiscountPercentage ?? null,
      },
      create: {
        id:                     cruise.id,
        title:                  cruise.title,
        imageUrl:               cruise.imageUrl,
        description:            cruise.description,
        itinerary:              cruise.itinerary,
        duration:               cruise.duration,
        price:                  cruise.price,
        sourceUrl:              cruise.sourceUrl,
        onSale:                 cruise.onSale,
        saleDiscountPercentage: cruise.saleDiscountPercentage ?? null,
      },
    });
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
