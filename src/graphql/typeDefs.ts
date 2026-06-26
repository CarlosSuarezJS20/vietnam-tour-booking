const typeDefs = `
  type TourCategory {
    id: ID!
    slug: String!
    label: String!
  }

  type Region {
    id: ID!
    key: String!
    label: String!
    image: String!
    cities: [City!]!
  }

  type City {
    id: ID!
    name: String!
    region: Region!
  }

  type Tour {
    id:           ID!
    title:        String!
    description:  String!
    itinerary:    String!
    imageUrl:     String!
    duration:     String!
    price:        Float!
    cities:       [City!]!
    categories:   [TourCategory!]!
    featuredTour: Boolean!
    onSale:                Boolean!
    saleDiscountPercentage: Int
  }

  type Cruise {
    id:          ID!
    title:       String!
    imageUrl:    String!
    description: String!
    itinerary:   String!
    duration:    String!
    price:       Float!
    sourceUrl:   String!
    onSale:                Boolean!
    saleDiscountPercentage: Int
  }

  type Query {
    tourCategories:                  [TourCategory!]!
    regions:                         [Region!]!
    region(key: String!):            Region
    cities:                          [City!]!
    featuredTour:                    Tour
    toursByCity(cityId: ID!, limit: Int):         [Tour!]!
    toursByCategory(categoryId: ID!, limit: Int): [Tour!]!
    cruises:                         [Cruise!]!
    allTours:                        [Tour!]!
    allCruises:                      [Cruise!]!
    tour(id: ID!):                   Tour
    cruise(id: ID!):                 Cruise
  }

  input ProductFilters {
    types:      [String!]
    categories: [String!]
    regions:    [String!]
    cities:     [ID!]
    minPrice:   Int
    maxPrice:   Int
    deals:      Boolean
  }

  union Product = Tour | Cruise

  type ProductEdge {
    cursor: String!
    node:   Product!
  }

  type PageInfo {
    hasNextPage:     Boolean!
    hasPreviousPage: Boolean!
    startCursor:     String
    endCursor:       String
  }

  type ProductConnection {
    edges:    [ProductEdge!]!
    pageInfo: PageInfo!
    total:    Int!
  }

  extend type Query {
    searchProducts(filters: ProductFilters, first: Int, after: String): ProductConnection!
  }

  type CartItem {
    uid:       ID!
    product:   Product!
    date:      String!
    time:      String!
    partySize: Int!
    price:     Float!
  }

  type Cart {
    items:      [CartItem!]!
    itemCount:  Int!
    totalPrice: Float!
  }

  input CartItemInput {
    tourId:    String
    cruiseId:  String
    date:      String!
    time:      String!
    partySize: Int!
    price:     Float!
  }

  extend type Query {
    cart(sessionId: String!): Cart!
  }

  type Mutation {
    addToCart(sessionId: String!, input: CartItemInput!): Cart!
    removeFromCart(sessionId: String!, uid: ID!):         Cart!
    clearCart(sessionId: String!):                        Cart!
  }

  input ContactInput {
    firstName: String!
    lastName:  String!
    email:     String!
    phone:     String
    message:   String
  }

  type ContactResult {
    id:        ID!
    createdAt: String!
  }

  extend type Mutation {
    submitContact(input: ContactInput!): ContactResult!
  }

  input EnquiryInput {
    tourType:          String!
    region:            String!
    cities:            [String!]!
    departureDate:     String!
    nights:            Int!
    includeCruise:     Boolean!
    extras:            String
    name:              String!
    email:             String!
    phone:             String!
    travellers:        Int!
    contactPreference: String!
  }

  type EnquiryResult {
    id:        ID!
    createdAt: String!
  }

  extend type Mutation {
    submitEnquiry(input: EnquiryInput!): EnquiryResult!
  }
`;

export default typeDefs;
