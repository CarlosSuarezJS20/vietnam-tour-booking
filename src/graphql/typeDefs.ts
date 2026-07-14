const typeDefs = `
  enum VisibilityFilter {
    ALL
    VISIBLE
    HIDDEN
  }

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

  type TourImage {
    id:        ID!
    url:       String!
    isPrimary: Boolean
  }

  type Tour {
    id:           ID!
    title:        String!
    description:  String!
    itinerary:    String!
    duration:     String!
    price:        Float!
    cities:       [City!]!
    categories:   [TourCategory!]!
    images:       [TourImage!]!
    featuredTour: Boolean!
    onSale:                Boolean!
    saleDiscountPercentage: Int
    createdAt:    String!
    isVisible:    Boolean!
  }

  type CruiseImage {
    id:        ID!
    url:       String!
    isPrimary: Boolean
  }

  type Cruise {
    id:          ID!
    title:       String!
    description: String!
    itinerary:   String!
    duration:    String!
    price:       Float!
    images:      [CruiseImage!]!
    onSale:                Boolean!
    saleDiscountPercentage: Int
    isVisible:   Boolean!
  }

  type TourEdge {
    cursor: String!
    node: Tour!
  }

  type TourConnection {
    edges: [TourEdge!]!
    pageInfo: PageInfo!
    total: Int!
    visibleCount: Int!
    hiddenCount: Int!
  }

  type CruiseEdge {
    cursor: String!
    node: Cruise!
  }

  type CruiseConnection {
    edges: [CruiseEdge!]!
    pageInfo: PageInfo!
    total: Int!
    visibleCount: Int!
    hiddenCount: Int!
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
    allTours(filter: VisibilityFilter = ALL, first: Int, after: String):     TourConnection!
    allCruises(filter: VisibilityFilter = ALL, first: Int, after: String):   CruiseConnection!
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
    search:     String
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

  input NewCityInput {
    name: String!
    regionId: String!
  }

  input NewCategoryInput {
    label: String!
  }

  input CreateTourInput {
    title: String!
    duration: String!
    price: Float!
    description: String!
    itinerary: String
    featuredTour: Boolean
    onSale: Boolean
    saleDiscountPercentage: Int
    cityIds: [String!]
    categoryIds: [String!]
    newCities: [NewCityInput!]
    newCategories: [NewCategoryInput!]
  }

  input CreateCruiseInput {
    title: String!
    duration: String!
    price: Float!
    description: String!
    itinerary: String
    onSale: Boolean
    saleDiscountPercentage: Int
  }

  extend type Mutation {
    toggleTourVisibility(id: String!): Tour!
    toggleCruiseVisibility(id: String!): Cruise!
    setAllToursVisibility(visible: Boolean!): [Tour!]!
    setAllCruisesVisibility(visible: Boolean!): [Cruise!]!
    createTour(input: CreateTourInput!): Tour!
    addTourImage(tourId: String!, url: String!): TourImage!
    deleteTourImage(imageId: String!): Boolean!
    setPrimaryTourImage(imageId: String!): TourImage!
    createCruise(input: CreateCruiseInput!): Cruise!
    addCruiseImage(cruiseId: String!, url: String!): CruiseImage!
    deleteCruiseImage(imageId: String!): Boolean!
    setPrimaryCruiseImage(imageId: String!): CruiseImage!
    setFeaturedTour(tourId: ID!): Tour!
  }
`;

export default typeDefs;
