import { useQuery } from "@apollo/client/react";
import { ALL_CRUISES_QUERY } from "@/graphql/queries";
import type { SearchCruise } from "@/types/graphql";

interface AllCruisesForSearchData {
  allCruises: {
    edges: Array<{ node: Omit<SearchCruise, "_type">; cursor: string }>;
    total: number;
  };
}

export function useAllCruisesForSearch(filter?: 'ALL' | 'VISIBLE' | 'HIDDEN') {
  const { data, loading, error } = useQuery<AllCruisesForSearchData>(
    ALL_CRUISES_QUERY,
    {
      variables: { filter: filter || 'ALL', first: 1000 },
      fetchPolicy: 'network-only'
    }
  );

  const cruises = data?.allCruises.edges.map(e => e.node) || [];

  return { cruises, loading, error };
}
