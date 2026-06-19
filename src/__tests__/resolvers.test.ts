import { prisma } from "@/lib/prisma";
import { resolvers } from "@/graphql/resolvers";

jest.mock("@/lib/prisma");

const mockPrisma = prisma as import("@/lib/__mocks__/prisma").MockPrismaClient;

describe("Query resolvers", () => {
  describe("tourCategories", () => {
    it("returns all tour categories from the DB", async () => {
      const mockCategories = [
        { id: "1", slug: "private-tours", label: "Private Tours", createdAt: new Date() },
        { id: "2", slug: "luxury",        label: "Luxury Tours",  createdAt: new Date() },
      ];

      mockPrisma.tourCategory.findMany.mockResolvedValue(mockCategories);

      const result = await resolvers.Query.tourCategories();

      expect(mockPrisma.tourCategory.findMany).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockCategories);
    });
  });

  describe("tour", () => {
    it("returns a single tour by id", async () => {
      const mockTour = {
        id: "1", title: "Test Tour", description: "", itinerary: "",
        duration: "3 days", price: "From: $120", featuredTour: false,
        onSale: false, saleDiscountPercentage: null, createdAt: new Date(),
      };

      mockPrisma.tour.findUnique.mockResolvedValue(mockTour);

      const result = await resolvers.Query.tour({} as never, { id: "1" });

      expect(mockPrisma.tour.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
      expect(result).toEqual(mockTour);
    });

    it("returns null when tour is not found", async () => {
      mockPrisma.tour.findUnique.mockResolvedValue(null);

      const result = await resolvers.Query.tour({} as never, { id: "999" });

      expect(result).toBeNull();
    });
  });

  describe("featuredTour", () => {
    it("returns the first tour with featuredTour: true", async () => {
      const mockTour = {
        id: "1", title: "Featured Tour", description: "", itinerary: "",
        duration: "5 days", price: "From: $500", featuredTour: true,
        onSale: false, saleDiscountPercentage: null, createdAt: new Date(),
      };

      mockPrisma.tour.findFirst.mockResolvedValue(mockTour);

      const result = await resolvers.Query.featuredTour();

      expect(mockPrisma.tour.findFirst).toHaveBeenCalledWith({ where: { featuredTour: true } });
      expect(result?.featuredTour).toBe(true);
    });
  });
});
