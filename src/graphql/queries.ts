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
      id title description duration price featuredTour
      images { id url isPrimary }
      cities     { id name region { label } }
      categories { id slug label }
    }
  }
`;

export const TOURS_BY_CATEGORY_QUERY = gql`
  query ToursByCategory($categoryId: ID!, $limit: Int) {
    toursByCategory(categoryId: $categoryId, limit: $limit) {
      id title duration price
      images { id url isPrimary }
      categories { id slug label }
    }
  }
`;

export const CRUISES_QUERY = gql`
  query GetCruises {
    cruises {
      id title description itinerary duration price
      images { id url isPrimary }
    }
  }
`;

export const TOURS_BY_CITY_QUERY = gql`
  query ToursByCity($cityId: ID!, $limit: Int) {
    toursByCity(cityId: $cityId, limit: $limit) {
      id title duration price
      images { id url isPrimary }
      categories { id slug label }
    }
  }
`;

export const ALL_TOURS_QUERY = gql`
  query AllTours($filter: VisibilityFilter = ALL, $first: Int = 7, $after: String) {
    allTours(filter: $filter, first: $first, after: $after) {
      edges {
        cursor
        node {
          id title description itinerary duration price featuredTour onSale saleDiscountPercentage createdAt isVisible
          images { id url isPrimary }
          cities     { id name region { id key label } }
          categories { id slug label }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
      total
      visibleCount
      hiddenCount
    }
  }
`;

export const ALL_CRUISES_QUERY = gql`
  query AllCruises($filter: VisibilityFilter = ALL, $first: Int = 7, $after: String) {
    allCruises(filter: $filter, first: $first, after: $after) {
      edges {
        cursor
        node {
          id title description itinerary duration price isVisible
          images { id url isPrimary }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
      total
      visibleCount
      hiddenCount
    }
  }
`;

const CART_FIELDS = gql`
  fragment CartFields on Cart {
    itemCount
    totalPrice
    items {
      uid date time partySize price
      product {
        __typename
        ... on Tour   { id title duration price images { id url isPrimary } cities { name } }
        ... on Cruise { id title duration price images { id url isPrimary } }
      }
    }
  }
`;

export const GET_CART_QUERY = gql`
  ${CART_FIELDS}
  query GetCart($sessionId: String!) {
    cart(sessionId: $sessionId) { ...CartFields }
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  ${CART_FIELDS}
  mutation AddToCart($sessionId: String!, $input: CartItemInput!) {
    addToCart(sessionId: $sessionId, input: $input) { 
    ...CartFields 
    }
  }
`;

export const SUBMIT_CONTACT_MUTATION = gql`
  mutation SubmitContact($input: ContactInput!) {
    submitContact(input: $input) {
      id
      createdAt
    }
  }
`;

export const SUBMIT_ENQUIRY_MUTATION = gql`
  mutation SubmitEnquiry($input: EnquiryInput!) {
    submitEnquiry(input: $input) {
      id
      createdAt
    }
  }
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  ${CART_FIELDS}
  mutation RemoveFromCart($sessionId: String!, $uid: ID!) {
    removeFromCart(sessionId: $sessionId, uid: $uid) { ...CartFields }
  }
`;

export const GET_TOUR_BY_ID_QUERY = gql`
  query GetTourById($id: ID!) {
    tour(id: $id) {
      id title description itinerary duration price featuredTour onSale saleDiscountPercentage
      images { id url isPrimary }
      cities     { id name region { id key label } }
      categories { id slug label }
    }
  }
`;

export const GET_CRUISE_BY_ID_QUERY = gql`
  query GetCruiseById($id: ID!) {
    cruise(id: $id) {
      id title description itinerary duration price onSale saleDiscountPercentage
      images { id url isPrimary }
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
            id title duration price featuredTour onSale saleDiscountPercentage
            images { id url isPrimary }
            cities     { id name region { id key label } }
            categories { id slug label }
          }
          ... on Cruise {
            id title duration price description onSale saleDiscountPercentage
            images { id url isPrimary }
          }
        }
      }
    }
  }
`;

export const TOGGLE_TOUR_VISIBILITY_MUTATION = gql`
  mutation ToggleTourVisibility($id: String!) {
    toggleTourVisibility(id: $id) {
      id title description itinerary duration price featuredTour onSale saleDiscountPercentage createdAt isVisible
      cities     { id name region { id key label } }
      categories { id slug label }
    }
  }
`;

export const TOGGLE_CRUISE_VISIBILITY_MUTATION = gql`
  mutation ToggleCruiseVisibility($id: String!) {
    toggleCruiseVisibility(id: $id) {
      id title description itinerary duration price isVisible
    }
  }
`;

export const SET_ALL_TOURS_VISIBILITY_MUTATION = gql`
  mutation SetAllToursVisibility($visible: Boolean!) {
    setAllToursVisibility(visible: $visible) {
      id title description itinerary duration price featuredTour onSale saleDiscountPercentage createdAt isVisible
      cities     { id name region { id key label } }
      categories { id slug label }
    }
  }
`;

export const SET_ALL_CRUISES_VISIBILITY_MUTATION = gql`
  mutation SetAllCruisesVisibility($visible: Boolean!) {
    setAllCruisesVisibility(visible: $visible) {
      id title description itinerary duration price isVisible
    }
  }
`;

export const CREATE_TOUR_MUTATION = gql`
  mutation CreateTour($input: CreateTourInput!) {
    createTour(input: $input) {
      id title description itinerary duration price featuredTour onSale saleDiscountPercentage createdAt isVisible
      cities     { id name region { id key label } }
      categories { id slug label }
    }
  }
`;

export const CREATE_CRUISE_MUTATION = gql`
  mutation CreateCruise($input: CreateCruiseInput!) {
    createCruise(input: $input) {
      id title description itinerary duration price onSale saleDiscountPercentage isVisible
    }
  }
`;

export const ADD_TOUR_IMAGE_MUTATION = gql`
  mutation AddTourImage($tourId: String!, $url: String!) {
    addTourImage(tourId: $tourId, url: $url) {
      id url isPrimary
    }
  }
`;

export const DELETE_TOUR_IMAGE_MUTATION = gql`
  mutation DeleteTourImage($imageId: String!) {
    deleteTourImage(imageId: $imageId)
  }
`;

export const SET_PRIMARY_TOUR_IMAGE_MUTATION = gql`
  mutation SetPrimaryTourImage($imageId: String!) {
    setPrimaryTourImage(imageId: $imageId) {
      id isPrimary
    }
  }
`;

export const ADD_CRUISE_IMAGE_MUTATION = gql`
  mutation AddCruiseImage($cruiseId: String!, $url: String!) {
    addCruiseImage(cruiseId: $cruiseId, url: $url) {
      id url isPrimary
    }
  }
`;

export const DELETE_CRUISE_IMAGE_MUTATION = gql`
  mutation DeleteCruiseImage($imageId: String!) {
    deleteCruiseImage(imageId: $imageId)
  }
`;

export const SET_PRIMARY_CRUISE_IMAGE_MUTATION = gql`
  mutation SetPrimaryCruiseImage($imageId: String!) {
    setPrimaryCruiseImage(imageId: $imageId) {
      id isPrimary
    }
  }
`;

export const SET_FEATURED_TOUR_MUTATION = gql`
  mutation SetFeaturedTour($tourId: ID!) {
    setFeaturedTour(tourId: $tourId) {
      id featuredTour
    }
  }
`;
