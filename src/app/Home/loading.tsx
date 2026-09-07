import Skeleton, { SkeletonCircle, SkeletonText } from '../components/Skeleton';

export default function Loading() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center py-12 sm:py-16 md:py-20">
      <div className="container mx-auto flex px-4 sm:px-5 md:flex-row flex-col items-center gap-8 sm:gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 sm:mb-16 md:mb-0 items-center text-center">
          <div className="space-y-6 sm:space-y-8 w-full">
            {/* Professional Header */}
            <div className="space-y-3 sm:space-y-4">
              {/* Badge line */}
              <div className="inline-block">
                <Skeleton width="w-48" height="h-5" shape="text" />
                <Skeleton width="w-16 sm:w-20" height="h-1" shape="text" className="mt-2" />
              </div>

              {/* Large heading */}
              <div className="space-y-2">
                <Skeleton width="w-full md:w-96" height="h-8 sm:h-10" shape="text" />
                <Skeleton width="w-4/5 md:w-80" height="h-8 sm:h-10" shape="text" />
              </div>

              {/* Subtitle with badge */}
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                <Skeleton width="w-8 sm:w-12" height="h-1" shape="text" />
                <Skeleton width="w-32 sm:w-40" height="h-5" shape="text" />
                <Skeleton width="w-20 sm:w-24" height="h-6" shape="rectangle" className="rounded-full" />
              </div>
            </div>

            {/* Description text */}
            <div className="space-y-3 sm:space-y-4">
              <SkeletonText lines={4} />
              <div className="flex items-center space-x-3 sm:space-x-4 justify-center md:justify-start">
                <Skeleton width="w-24" height="h-4" shape="text" />
                <Skeleton width="w-28" height="h-4" shape="text" />
              </div>
            </div>

            {/* Skill tag pills - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
                  <div className="p-1.5 sm:p-2 bg-gray-600 rounded-lg">
                    <Skeleton width="w-4 h-4 sm:w-5 sm:h-5" shape="circle" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Skeleton width="w-24" height="h-4" shape="text" />
                    <Skeleton width="w-20" height="h-3" shape="text" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-3 sm:space-y-4">
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-6">
                <Skeleton width="w-40 sm:w-48" height="h-10 sm:h-11" shape="rectangle" className="rounded-lg" />
              </div>

              {/* Social Links - 2 circles */}
              <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 pt-3 sm:pt-4">
                <SkeletonCircle size="w-10 h-10 sm:w-12 sm:h-12" />
                <SkeletonCircle size="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 sm:w-5/6">
          <div className="relative group">
            {/* Gradient glow effect placeholder */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30" />
            <div className="relative">
              <Skeleton
                width="w-full"
                height="h-[400px] sm:h-[500px] md:h-[600px]"
                shape="rectangle"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
