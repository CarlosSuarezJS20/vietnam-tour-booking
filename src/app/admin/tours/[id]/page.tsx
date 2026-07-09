'use client';

import { useGetTourByIdQuery } from '@/graphql/hooks';
import { TourDetailView } from '@/components/admin/tours/TourDetailView';

interface TourDetailPageProps {
  params: {
    id: string;
  };
}

const TourDetailPage = ({ params }: TourDetailPageProps) => {
  const { data: tour, loading, error } = useGetTourByIdQuery(params.id);

  if (loading) return <div className="text-sm text-[#17171799]">Loading tour...</div>;
  if (error) return <div className="text-sm text-red-600">Error loading tour</div>;
  if (!tour) return <div className="text-sm text-[#17171799]">Tour not found</div>;

  return <TourDetailView tour={tour as any} />;
};

export default TourDetailPage;
