import { useQuery } from "@apollo/client/react";
import { ALL_TOURS_QUERY } from "@/graphql/queries";
import type { SearchTour } from "@/types/graphql";

interface AllToursForSearchData {
  allTours: {
    edges: Array<{ node: Omit<SearchTour, "_type" | "cityNames">; cursor: string }>;
    total: number;
  };
}

export function useAllToursForSearch(filter?: 'ALL' | 'VISIBLE' | 'HIDDEN') {
  const { data, loading, error } = useQuery<AllToursForSearchData>(
    ALL_TOURS_QUERY,
    {
      variables: { filter: filter || 'ALL', first: 1000 },
      fetchPolicy: 'cache-and-network'
    }
  );

  const tours = data?.allTours.edges.map(e => e.node) || [];

  return { tours, loading, error };
}
