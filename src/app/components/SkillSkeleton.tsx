import Skeleton, { SkeletonCircle } from './Skeleton';

export default function SkillSkeleton() {
  return (
    <div className="group relative bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-700 p-5 sm:p-7">
      <div className="flex flex-col items-center space-y-4">
        {/* Icon Skeleton */}
        <div className="p-4 sm:p-5 bg-gray-600 rounded-xl">
          <SkeletonCircle size="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-6 sm:h-7 w-3/4" />

        {/* Description Skeleton - 2 lines */}
        <div className="space-y-2 w-full">
          <Skeleton className="h-3 sm:h-4 w-full" />
          <Skeleton className="h-3 sm:h-4 w-5/6 mx-auto" />
        </div>

        {/* Level Badge Skeleton */}
        <Skeleton className="h-5 sm:h-6 w-16 sm:w-20 rounded-full" />

        {/* Category Skeleton */}
        <Skeleton className="h-3 sm:h-4 w-12 sm:w-16" />
      </div>
    </div>
  );
}

// Grid of skill skeletons
export function SkillSkeletonGrid({ count = 16 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <SkillSkeleton key={index} />
      ))}
    </div>
  );
}
