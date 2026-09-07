import Skeleton, { SkeletonCircle } from '../components/Skeleton';

export default function Loading() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center justify-center space-x-2">
              <SkeletonCircle size="w-4 h-4" />
              <Skeleton width="w-32 sm:w-40" height="h-4" shape="text" />
            </div>
            <Skeleton width="w-20 sm:w-24" height="h-1" shape="text" className="mx-auto mt-2" />
          </div>
          <Skeleton width="w-56 sm:w-64" height="h-8 sm:h-10" shape="text" className="mx-auto mb-3 sm:mb-4" />
          <Skeleton width="w-full max-w-2xl" height="h-5" shape="text" className="mx-auto" />
        </div>

        {/* Toggle All Button */}
        <div className="text-center mb-8 sm:mb-12">
          <Skeleton width="w-32 sm:w-36" height="h-10" shape="rectangle" className="mx-auto rounded-lg" />
        </div>

        {/* Categorized Skills - Accordion Skeletons */}
        <div className="space-y-6 sm:space-y-8">
          {Array.from({ length: 3 }).map((_, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700"
            >
              {/* Accordion Header */}
              <div className="w-full px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton width="w-32 sm:w-40" height="h-6 sm:h-7" shape="text" />
                  <Skeleton width="w-16 sm:w-20" height="h-6" shape="rectangle" className="rounded-full" />
                </div>
                <SkeletonCircle size="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Skills Grid - Show for first accordion, hide for others */}
              {categoryIndex === 0 && (
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {Array.from({ length: 4 }).map((_, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 border border-gray-700"
                    >
                      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                        {/* Icon Circle */}
                        <div className="p-3 sm:p-4 rounded-lg bg-gray-600">
                          <SkeletonCircle size="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>

                        {/* Title */}
                        <Skeleton width="w-3/4" height="h-5 sm:h-6" shape="text" />

                        {/* Description */}
                        <Skeleton width="w-full" height="h-4" shape="text" />
                        <Skeleton width="w-5/6" height="h-4" shape="text" />

                        {/* Level Badge */}
                        <Skeleton width="w-20 sm:w-24" height="h-6" shape="rectangle" className="rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
