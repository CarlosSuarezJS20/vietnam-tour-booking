import { gql } from "@apollo/client";

export const TOUR_CATEGORIES_QUERY = gql`
  query GetTourCategories {
    tourCategories { id slug label }
  }
`;

export const REGIONS_QUERY = gql`
  query GetRegions {
    regions { id key label image cities { id name } }
  }
`;

export const FEATURED_TOUR_QUERY = gql`
  query GetFeaturedTour {
    featuredTour {
      id title description imageUrl duration price featuredTour
      cities     { id name region { label } }
      categories { id slug label }
    }
  }
`;

export const TOURS_BY_CATEGORY_QUERY = gql`
  query ToursByCategory($categoryId: ID!, $limit: Int) {
    toursByCategory(categoryId: $categoryId, limit: $limit) {
      id title imageUrl duration price
      categories { id slug label }
    }
  }
`;

export const CRUISES_QUERY = gql`
  query GetCruises {
    cruises {
      id title imageUrl description itinerary duration price sourceUrl
    }
  }
`;

export const TOURS_BY_CITY_QUERY = gql`
  query ToursByCity($cityId: ID!, $limit: Int) {
    toursByCity(cityId: $cityId, limit: $limit) {
      id title imageUrl duration price
      categories { id slug label }
    }
  }
`;

export const ALL_TOURS_QUERY = gql`
  query AllTours {
    allTours {
      id title description itinerary imageUrl duration price featuredTour
      cities     { id name region { id key label } }
      categories { id slug label }
    }
  }
`;

export const ALL_CRUISES_QUERY = gql`
  query AllCruises {
    allCruises {
      id title description itinerary imageUrl duration price sourceUrl
    }
  }
`;

export const SEARCH_PRODUCTS_QUERY = gql`
  query SearchProducts($filters: ProductFilters, $first: Int, $after: String) {
    searchProducts(filters: $filters, first: $first, after: $after) {
      total
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          __typename
          ... on Tour {
            id title imageUrl duration price featuredTour
            cities     { id name region { id key label } }
            categories { id slug label }
          }
          ... on Cruise {
            id title imageUrl duration price description sourceUrl
          }
        }
      }
    }
  }
`;
