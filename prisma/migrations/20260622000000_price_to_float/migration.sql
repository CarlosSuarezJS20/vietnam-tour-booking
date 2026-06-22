-- Change price from String to Float on Tour and Cruise
ALTER TABLE "Tour"   ALTER COLUMN "price" TYPE DOUBLE PRECISION USING price::double precision;
ALTER TABLE "Cruise" ALTER COLUMN "price" TYPE DOUBLE PRECISION USING price::double precision;
