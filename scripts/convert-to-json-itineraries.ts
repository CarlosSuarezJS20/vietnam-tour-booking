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
  day: number;
  activity: string;
  description: string;
}

const parseTextItinerary = (text: string): ItineraryDay[] => {
  if (!text || text.trim() === '') return [];

  const days: ItineraryDay[] = [];
  const dayBlocks = text.split('\n\n');

  dayBlocks.forEach((block, index) => {
    const lines = block.split('\n');
    if (lines.length > 0) {
      const firstLine = lines[0];
      const match = firstLine.match(/Day\s+(\d+):\s*(.*)/);

      if (match) {
        const dayNum = parseInt(match[1], 10);
        const activity = match[2] || `Day ${dayNum}`;
        const description = lines.slice(1).join('\n').trim();

        days.push({
          day: dayNum,
          activity,
          description,
        });
      }
    }
  });

  return days;
};

const convertToJsonFormat = (itinerary: string): string => {
  if (!itinerary || itinerary.trim() === '') return '[]';

  // Try parsing as JSON first
  try {
    const parsed = JSON.parse(itinerary);
    if (Array.isArray(parsed)) {
      return JSON.stringify(parsed);
    }
  } catch {
    // Not JSON, parse as text
  }

  // Parse as text format
  const days = parseTextItinerary(itinerary);
  return JSON.stringify(days);
};

const main = async () => {
  try {
    console.log('Starting itinerary JSON conversion...\n');

    // Process Tours
    console.log('Processing tours...');
    const tours = await prisma.tour.findMany({
      select: { id: true, title: true, itinerary: true },
    });

    let toursUpdated = 0;

    for (const tour of tours) {
      if (tour.itinerary && tour.itinerary.trim() !== '') {
        const jsonItinerary = convertToJsonFormat(tour.itinerary);

        // Only update if the format changed
        if (jsonItinerary !== tour.itinerary) {
          await prisma.tour.update({
            where: { id: tour.id },
            data: { itinerary: jsonItinerary },
          });
          console.log(`  ✓ Updated tour: ${tour.title} (id: ${tour.id})`);
          toursUpdated++;
        }
      }
    }

    console.log(`\nTours updated: ${toursUpdated}\n`);

    // Process Cruises
    console.log('Processing cruises...');
    const cruises = await prisma.cruise.findMany({
      select: { id: true, title: true, itinerary: true },
    });

    let cruisesUpdated = 0;

    for (const cruise of cruises) {
      if (cruise.itinerary && cruise.itinerary.trim() !== '') {
        const jsonItinerary = convertToJsonFormat(cruise.itinerary);

        // Only update if the format changed
        if (jsonItinerary !== cruise.itinerary) {
          await prisma.cruise.update({
            where: { id: cruise.id },
            data: { itinerary: jsonItinerary },
          });
          console.log(`  ✓ Updated cruise: ${cruise.title} (id: ${cruise.id})`);
          cruisesUpdated++;
        }
      }
    }

    console.log(`\nCruises updated: ${cruisesUpdated}\n`);

    console.log('✅ Itinerary JSON conversion complete!');
    console.log(`Total updated: ${toursUpdated + cruisesUpdated}`);
  } catch (error) {
    console.error('Error during itinerary conversion:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
