import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Khanzadi Wazir Ali',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="text-center max-w-lg mx-auto">
        {/* 404 number */}
        <p className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent select-none leading-none mb-4">
          404
        </p>

        {/* Gradient underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 mx-auto mb-8" />

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/45 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
