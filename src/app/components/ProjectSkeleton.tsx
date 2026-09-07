import Skeleton from './Skeleton';

export default function ProjectSkeleton() {
  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700">
      {/* Image Skeleton */}
      <Skeleton className="h-[180px] sm:h-[200px] w-full rounded-none" />

      {/* Content Skeleton */}
      <div className="flex-1 p-4 sm:p-6 space-y-3">
        {/* Title Skeleton */}
        <Skeleton className="h-6 sm:h-7 w-4/5" />

        {/* Description Skeleton - 3 lines */}
        <div className="space-y-2">
          <Skeleton className="h-3 sm:h-4 w-full" />
          <Skeleton className="h-3 sm:h-4 w-full" />
          <Skeleton className="h-3 sm:h-4 w-3/4" />
        </div>
      </div>
    </div>
  );
}

// Grid of project skeletons
export function ProjectSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
}
