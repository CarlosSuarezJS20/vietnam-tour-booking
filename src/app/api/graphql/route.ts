import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "@/graphql/resolvers";
import { NextRequest } from "next/server";
import typeDefs from "@/graphql/typeDefs";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export const GET  = (req: NextRequest) => handler(req);
export const POST = (req: NextRequest) => handler(req);
