-- Change price from String to Float on Tour and Cruise
-- USING clause handles both plain numeric strings AND "From: $2,180" format
ALTER TABLE "Tour"
  ALTER COLUMN "price" TYPE DOUBLE PRECISION
  USING regexp_replace(price, '[^0-9.]', '', 'g')::double precision;

ALTER TABLE "Cruise"
  ALTER COLUMN "price" TYPE DOUBLE PRECISION
  USING regexp_replace(price, '[^0-9.]', '', 'g')::double precision;
