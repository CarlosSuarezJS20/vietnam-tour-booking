ALTER TABLE "Tour"
  ALTER COLUMN "price" TYPE DOUBLE PRECISION
  USING regexp_replace(price, '[^0-9.]', '', 'g')::double precision;

ALTER TABLE "Cruise"
  ALTER COLUMN "price" TYPE DOUBLE PRECISION
  USING regexp_replace(price, '[^0-9.]', '', 'g')::double precision;
