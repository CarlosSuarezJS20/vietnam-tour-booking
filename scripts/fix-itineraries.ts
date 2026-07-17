import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Load .env.local before creating prisma
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach((line) => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=').replace(/^"(.*)"$/, '$1');
      if (key && value) {
        process.env[key.trim()] = value.trim();
      }
    }
  });
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface ItineraryDay {
  id?: string;
  day: number;
  activity?: string;
  title?: string;
  description?: string;
  body?: string;
  duration?: string;
}

const convertToTextFormat = (itinerary: string): string => {
  if (!itinerary || itinerary.trim() === '') return '';

  let days: ItineraryDay[] = [];

  // Try JSON first
  try {
    const parsed = JSON.parse(itinerary);
    if (Array.isArray(parsed)) {
      days = parsed;
    }
  } catch {
    // Already text format, return as-is
    return itinerary;
  }

  // Convert JSON format to text format
  if (days.length === 0) return '';

  return days
    .map(
      (d) =>
        `Day ${d.day}${d.activity || d.title ? `: ${d.activity || d.title}` : ''}${
          d.description || d.body ? `\n${d.description || d.body}` : ''
        }`
    )
    .join('\n\n');
};

const main = async () => {
  try {
    console.log('Starting itinerary cleanup...\n');

    // Process Tours
    console.log('Processing tours...');
    const tours = await prisma.tour.findMany({
      select: { id: true, title: true, itinerary: true },
    });

    let toursDeleted = 0;
    let toursUpdated = 0;

    for (const tour of tours) {
      if (!tour.itinerary || tour.itinerary.trim() === '') {
        // Delete tours with empty itinerary (with cascade delete)
        await prisma.$transaction([
          prisma.cartItem.deleteMany({ where: { tourId: tour.id } }),
          prisma.tourImage.deleteMany({ where: { tourId: tour.id } }),
          prisma.tourCity.deleteMany({ where: { tourId: tour.id } }),
          prisma.tourCategoryOnTour.deleteMany({ where: { tourId: tour.id } }),
          prisma.tour.delete({ where: { id: tour.id } }),
        ]);
        console.log(`  ✓ Deleted tour: ${tour.title} (id: ${tour.id})`);
        toursDeleted++;
      } else {
        // Convert itinerary format
        const newItinerary = convertToTextFormat(tour.itinerary);
        if (newItinerary !== tour.itinerary) {
          await prisma.tour.update({
            where: { id: tour.id },
            data: { itinerary: newItinerary },
          });
          console.log(`  ✓ Updated tour: ${tour.title} (id: ${tour.id})`);
          toursUpdated++;
        }
      }
    }

    console.log(`\nTours: ${toursDeleted} deleted, ${toursUpdated} updated\n`);

    // Process Cruises
    console.log('Processing cruises...');
    const cruises = await prisma.cruise.findMany({
      select: { id: true, title: true, itinerary: true },
    });

    let cruisesDeleted = 0;
    let cruisesUpdated = 0;

    for (const cruise of cruises) {
      if (!cruise.itinerary || cruise.itinerary.trim() === '') {
        // Delete cruises with empty itinerary (with cascade delete)
        await prisma.$transaction([
          prisma.cartItem.deleteMany({ where: { cruiseId: cruise.id } }),
          prisma.cruiseImage.deleteMany({ where: { cruiseId: cruise.id } }),
          prisma.cruise.delete({ where: { id: cruise.id } }),
        ]);
        console.log(`  ✓ Deleted cruise: ${cruise.title} (id: ${cruise.id})`);
        cruisesDeleted++;
      } else {
        // Convert itinerary format
        const newItinerary = convertToTextFormat(cruise.itinerary);
        if (newItinerary !== cruise.itinerary) {
          await prisma.cruise.update({
            where: { id: cruise.id },
            data: { itinerary: newItinerary },
          });
          console.log(`  ✓ Updated cruise: ${cruise.title} (id: ${cruise.id})`);
          cruisesUpdated++;
        }
      }
    }

    console.log(
      `\nCruises: ${cruisesDeleted} deleted, ${cruisesUpdated} updated\n`
    );

    console.log('✅ Itinerary cleanup complete!');
    console.log(
      `Total: ${toursDeleted + cruisesDeleted} deleted, ${toursUpdated + cruisesUpdated} updated`
    );
  } catch (error) {
    console.error('Error during itinerary cleanup:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
