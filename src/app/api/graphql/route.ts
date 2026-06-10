import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "@/graphql/resolvers";
import { NextRequest } from "next/server";
import path from "path";

// Load all .graphql SDL files from src/graphql/schema/ and merge them into
// a single typeDefs object. This lets you split the schema across multiple
// files as it grows (e.g. tour.graphql, region.graphql) without manually
// importing each one.
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(process.cwd(), "src/graphql/schema/**/*.graphql"))
);

// Combine the type definitions (the "shape" of the API) with the resolvers
// (the functions that actually return the data). This produces the full
// executable schema that Apollo Server needs to handle queries.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create the Apollo Server instance. This is the engine that receives a
// GraphQL query, validates it against the schema, runs the matching resolver,
// and returns the result as JSON.
// When we swap to a real database, only the resolvers change — this line stays.
const server = new ApolloServer({ schema });

// Adapt Apollo Server to work with Next.js App Router. The handler is a
// function that accepts a Next.js Request and returns a Response.
const handler = startServerAndCreateNextHandler<NextRequest>(server);

// Expose the single /api/graphql endpoint for both GET and POST.
// GraphQL clients typically use POST (query in the request body), but GET
// is needed for browser-based tools like Apollo Sandbox.
export const GET  = (req: NextRequest) => handler(req);
export const POST = (req: NextRequest) => handler(req);
