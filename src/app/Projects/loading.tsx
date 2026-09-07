import Skeleton, { SkeletonCircle } from '../components/Skeleton';

export default function Loading() {
  return (
    <section className="text-gray-100 body-font bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 sm:px-5 py-12 sm:py-16 md:py-24 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col text-center w-full mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center justify-center space-x-2">
              <SkeletonCircle size="w-4 h-4" />
              <Skeleton width="w-32 sm:w-40" height="h-4" shape="text" />
            </div>
            <Skeleton width="w-20 sm:w-24" height="h-1" shape="text" className="mx-auto mt-2" />
          </div>
          <Skeleton width="w-48 sm:w-56" height="h-8 sm:h-10" shape="text" className="mx-auto mb-3 sm:mb-4" />
          <Skeleton width="w-full max-w-2xl" height="h-5" shape="text" className="mx-auto" />
        </div>

        {/* Project Stats - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800 rounded-xl shadow-sm border border-gray-700"
            >
              <div className="p-2 sm:p-3 bg-gray-600 rounded-lg">
                <SkeletonCircle size="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 space-y-1">
                <Skeleton width="w-24 sm:w-28" height="h-4" shape="text" />
                <Skeleton width="w-20 sm:w-24" height="h-3" shape="text" />
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs - 6 Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              width={`w-${[20, 24, 28, 32, 36, 28][index]}`}
              height="h-9 sm:h-10"
              shape="rectangle"
              className="rounded-lg"
            />
          ))}
        </div>

        {/* Projects Grid - 8 Cards */}
        <div className="flex flex-wrap -m-2 sm:-m-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="p-2 sm:p-4 lg:w-1/4 md:w-1/2 w-full"
            >
              <div className="flex flex-col h-full bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                {/* Image Skeleton */}
                <Skeleton
                  width="w-full"
                  height="h-[180px] sm:h-[200px]"
                  shape="rectangle"
                  className="rounded-t-xl"
                />

                {/* Content Area */}
                <div className="flex-1 p-4 sm:p-6 bg-gray-800 space-y-3">
                  {/* Category Badge */}
                  <Skeleton width="w-20 sm:w-24" height="h-5" shape="rectangle" className="rounded-full" />

                  {/* Title */}
                  <Skeleton width="w-4/5" height="h-5 sm:h-6" shape="text" />

                  {/* Description - 2 Lines */}
                  <div className="space-y-2">
                    <Skeleton width="w-full" height="h-4" shape="text" />
                    <Skeleton width="w-5/6" height="h-4" shape="text" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button Skeleton */}
        <div className="text-center mt-8 sm:mt-12">
          <Skeleton width="w-48 sm:w-56" height="h-11 sm:h-12" shape="rectangle" className="mx-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}
