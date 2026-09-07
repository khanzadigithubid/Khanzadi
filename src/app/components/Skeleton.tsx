import React from 'react';

interface SkeletonProps {
  /**
   * Width of the skeleton element
   * Can be Tailwind class (e.g., "w-full", "w-20") or custom CSS value
   */
  width?: string;

  /**
   * Height of the skeleton element
   * Can be Tailwind class (e.g., "h-40", "h-4") or custom CSS value
   */
  height?: string;

  /**
   * Shape variant of the skeleton
   * - "rectangle": rounded-xl corners (default)
   * - "circle": fully rounded for avatars/icons
   * - "text": rounded-md with line-like appearance
   */
  shape?: "rectangle" | "circle" | "text";

  /**
   * Optional additional classes to override or extend default styling
   */
  className?: string;
}

/**
 * Reusable Skeleton Loading Component
 *
 * Provides animated loading placeholders matching the portfolio's slate design system
 *
 * @example
 * // Rectangle skeleton
 * <Skeleton width="w-full" height="h-40" shape="rectangle" />
 *
 * @example
 * // Circle skeleton for avatar
 * <Skeleton width="w-16" height="h-16" shape="circle" />
 *
 * @example
 * // Text line skeleton
 * <Skeleton width="w-3/4" shape="text" />
 */
export default function Skeleton({
  width = "w-full",
  height = "h-4",
  shape = "rectangle",
  className = "",
}: SkeletonProps) {
  // Base classes for all skeleton variants
  const baseClasses = "animate-pulse bg-gray-600";

  // Shape-specific classes
  const shapeClasses = {
    rectangle: "rounded-xl",
    circle: "rounded-full",
    text: "rounded-md h-4", // Text lines are typically shorter
  };

  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${shapeClasses[shape]}
    ${width}
    ${shape !== "text" ? height : ""}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      className={combinedClasses}
      aria-hidden="true"
      role="status"
      aria-label="Loading..."
    />
  );
}

/**
 * Specialized Skeleton for text content with multiple lines
 */
export function SkeletonText({
  lines = 3,
  className = ""
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          shape="text"
          width={index === lines - 1 ? "w-3/4" : "w-full"} // Last line shorter
        />
      ))}
    </div>
  );
}

/**
 * Specialized Skeleton for circular avatars/icons
 */
export function SkeletonCircle({
  size = "w-12 h-12",
  className = ""
}: {
  size?: string;
  className?: string;
}) {
  return (
    <Skeleton
      width={size.split(' ')[0] || "w-12"}
      height={size.split(' ')[1] || "h-12"}
      shape="circle"
      className={className}
    />
  );
}

/**
 * Specialized Skeleton for card layouts
 */
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 ${className}`}>
      <div className="space-y-4">
        {/* Icon/Image placeholder */}
        <Skeleton width="w-16" height="h-16" shape="circle" className="mx-auto" />

        {/* Title placeholder */}
        <Skeleton width="w-3/4" height="h-6" shape="text" className="mx-auto" />

        {/* Description placeholder */}
        <SkeletonText lines={3} />
      </div>
    </div>
  );
}

/**
 * Specialized Skeleton for project card layouts
 */
export function SkeletonProject({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 ${className}`}>
      {/* Image placeholder */}
      <Skeleton width="w-full" height="h-48" shape="rectangle" className="rounded-t-xl" />

      {/* Content area */}
      <div className="p-6 space-y-3">
        {/* Category badge */}
        <Skeleton width="w-20" height="h-5" shape="text" />

        {/* Title */}
        <Skeleton width="w-4/5" height="h-6" shape="text" />

        {/* Description */}
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}
