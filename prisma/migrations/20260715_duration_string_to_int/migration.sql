-- AlterTable - Convert Tour duration from String to Int
ALTER TABLE "Tour" 
ALTER COLUMN "duration" TYPE INTEGER 
USING CASE 
  WHEN "duration" ~ '^\d+$' THEN CAST("duration" AS INTEGER)
  ELSE 0
END;

-- AlterTable - Convert Cruise duration from String to Int
ALTER TABLE "Cruise"
ALTER COLUMN "duration" TYPE INTEGER
USING CASE
  WHEN "duration" ~ '^\d+$' THEN CAST("duration" AS INTEGER)
  ELSE 0
END;
