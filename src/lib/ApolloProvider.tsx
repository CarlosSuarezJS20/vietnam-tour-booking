"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { useMemo } from "react";

const makeClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: "/api/graphql" }),
    cache: new InMemoryCache({
      possibleTypes: {
        Product: ["Tour", "Cruise"],
      },
    }),
  });
}

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const client = useMemo(() => makeClient(), []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider;
