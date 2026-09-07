import Skeleton, { SkeletonCircle, SkeletonText } from '../components/Skeleton';

export default function Loading() {
  return (
    <section className="text-gray-100 body-font bg-gradient-to-b from-black to-gray-900 py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="flex items-center justify-center space-x-2">
                <SkeletonCircle size="w-4 h-4" />
                <Skeleton width="w-32" height="h-4" shape="text" />
              </div>
              <Skeleton width="w-20 sm:w-24" height="h-1" shape="text" className="mx-auto mt-2" />
            </div>
            <Skeleton width="w-48 sm:w-64" height="h-8 sm:h-10" shape="text" className="mx-auto mb-3 sm:mb-4" />
            <SkeletonText lines={2} className="max-w-2xl mx-auto" />
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 mb-16 sm:mb-20">
            {/* Circular Profile Image */}
            <div className="relative group">
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30" />
              <div className="relative">
                <SkeletonCircle size="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1 text-center md:text-left px-4 sm:px-0">
              <div className="space-y-4 sm:space-y-6">
                {/* Name & Title */}
                <div>
                  <Skeleton width="w-full md:w-96" height="h-7 sm:h-8" shape="text" className="mb-3 sm:mb-4" />
                  <div className="space-y-2">
                    <Skeleton width="w-full" height="h-5" shape="text" />
                    <Skeleton width="w-4/5" height="h-5" shape="text" />
                    <Skeleton width="w-3/4" height="h-5" shape="text" />
                    <Skeleton width="w-full" height="h-5" shape="text" />
                    <Skeleton width="w-2/3" height="h-5" shape="text" />
                  </div>
                </div>

                {/* 3 Badge Pills */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <Skeleton width="w-32 sm:w-36" height="h-8" shape="rectangle" className="rounded-full" />
                  <Skeleton width="w-36 sm:w-40" height="h-8" shape="rectangle" className="rounded-full" />
                  <Skeleton width="w-28 sm:w-32" height="h-8" shape="rectangle" className="rounded-full" />
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <Skeleton width="w-36 sm:w-40" height="h-8" shape="rectangle" className="rounded-full" />
                  <Skeleton width="w-24 sm:w-28" height="h-8" shape="rectangle" className="rounded-full" />
                  <Skeleton width="w-32 sm:w-36" height="h-8" shape="rectangle" className="rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Card Section (Technical Expertise + Education) */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-700"
              >
                {/* Card Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-3 bg-gray-600 rounded-lg mr-4">
                    <Skeleton width="w-5 h-5 sm:w-6 sm:h-6" shape="circle" />
                  </div>
                  <Skeleton width="w-40 sm:w-48" height="h-6" shape="text" />
                </div>

                {/* Card Content */}
                <SkeletonText lines={4} />
              </div>
            ))}
          </div>

          {/* Future Goals Section */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-700">
            {/* Section Header */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-3 bg-gray-600 rounded-lg mr-4">
                <Skeleton width="w-5 h-5 sm:w-6 sm:h-6" shape="circle" />
              </div>
              <Skeleton width="w-32 sm:w-40" height="h-6" shape="text" />
            </div>

            {/* Two-Column Lists */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Short Term */}
              <div className="space-y-3 sm:space-y-4">
                <Skeleton width="w-24 sm:w-28" height="h-5" shape="text" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center">
                      <Skeleton width="w-2 h-2" shape="circle" className="mr-2" />
                      <Skeleton width="w-full" height="h-4" shape="text" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Long Term */}
              <div className="space-y-3 sm:space-y-4">
                <Skeleton width="w-24 sm:w-28" height="h-5" shape="text" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center">
                      <Skeleton width="w-2 h-2" shape="circle" className="mr-2" />
                      <Skeleton width="w-full" height="h-4" shape="text" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
