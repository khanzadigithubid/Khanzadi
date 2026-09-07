import Skeleton, { SkeletonCircle } from './Skeleton';

export default function ServiceSkeleton() {
  return (
    <div className="group bg-gray-800 rounded-2xl shadow-md border border-gray-700 p-6 sm:p-8 md:p-10">
      <div className="space-y-4 sm:space-y-5">
        {/* Icon Skeleton */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gray-600">
          <SkeletonCircle size="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-7 sm:h-8 w-3/4 mx-auto" />

        {/* Description Skeleton - 3 lines */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>

        {/* Feature List Skeleton - 3 items */}
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <SkeletonCircle size="w-4 h-4" />
              <Skeleton className="h-3 sm:h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Grid of service skeletons
export function ServiceSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {Array.from({ length: count }).map((_, index) => (
        <ServiceSkeleton key={index} />
      ))}
    </div>
  );
}
