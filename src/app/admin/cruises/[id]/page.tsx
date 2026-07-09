'use client';

import { useGetCruiseByIdQuery } from '@/graphql/hooks';
import { CruiseDetailView } from '@/components/admin/cruises/CruiseDetailView';

interface CruiseDetailPageProps {
  params: {
    id: string;
  };
}

const CruiseDetailPage = ({ params }: CruiseDetailPageProps) => {
  const { data: cruise, loading, error } = useGetCruiseByIdQuery(params.id);

  if (loading) return <div className="text-sm text-[#17171799]">Loading cruise...</div>;
  if (error) return <div className="text-sm text-red-600">Error loading cruise</div>;
  if (!cruise) return <div className="text-sm text-[#17171799]">Cruise not found</div>;

  return <CruiseDetailView cruise={cruise as any} />;
};

export default CruiseDetailPage;
