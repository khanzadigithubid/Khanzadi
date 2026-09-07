import Skeleton, { SkeletonCircle } from '../components/Skeleton';

export default function Loading() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-2 sm:mb-3">
            <div className="flex items-center justify-center space-x-2">
              <SkeletonCircle size="w-4 h-4 sm:w-5 sm:h-5" />
              <Skeleton width="w-28 sm:w-32" height="h-4" shape="text" />
            </div>
            <Skeleton width="w-16 sm:w-20" height="h-0.5 sm:h-1" shape="text" className="mx-auto mt-1.5 sm:mt-2" />
          </div>
          <Skeleton width="w-48 sm:w-56" height="h-8 sm:h-10 md:h-12" shape="text" className="mx-auto mb-2 sm:mb-3" />
          <Skeleton width="w-full max-w-2xl" height="h-5" shape="text" className="mx-auto" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-700">
            <Skeleton width="w-40 sm:w-48" height="h-6 sm:h-7" shape="text" className="mb-3 sm:mb-4 md:mb-6" />

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Name Input */}
              <div className="space-y-1.5 sm:space-y-2">
                <Skeleton width="w-16 sm:w-20" height="h-4" shape="text" />
                <Skeleton width="w-full" height="h-12 sm:h-13" shape="rectangle" className="rounded-lg" />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5 sm:space-y-2">
                <Skeleton width="w-16 sm:w-20" height="h-4" shape="text" />
                <Skeleton width="w-full" height="h-12 sm:h-13" shape="rectangle" className="rounded-lg" />
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5 sm:space-y-2">
                <Skeleton width="w-20 sm:w-24" height="h-4" shape="text" />
                <Skeleton width="w-full" height="h-32 sm:h-36" shape="rectangle" className="rounded-lg" />
              </div>

              {/* Submit Button */}
              <Skeleton width="w-full" height="h-10 sm:h-11 md:h-12" shape="rectangle" className="rounded-lg" />
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-700">
              <Skeleton width="w-full" height="h-48 sm:h-52" shape="rectangle" className="rounded-xl" />
            </div>

            {/* Contact Details Card */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-700">
              <Skeleton width="w-48 sm:w-56" height="h-6 sm:h-7" shape="text" className="mb-3 sm:mb-4 md:mb-6" />

              {/* Contact Info Rows - 2 Items */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-2.5 md:p-3 bg-gray-600 rounded-lg">
                      <SkeletonCircle size="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Skeleton width="w-20 sm:w-24" height="h-4" shape="text" />
                      <Skeleton width="w-48 sm:w-56" height="h-4" shape="text" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links Section */}
              <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-700">
                <Skeleton width="w-32 sm:w-40" height="h-5 sm:h-6" shape="text" className="mb-2 sm:mb-3 md:mb-4" />

                {/* 3 Social Icon Circles */}
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="p-2 sm:p-2.5 md:p-3 bg-gray-600 rounded-lg"
                    >
                      <SkeletonCircle size="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
