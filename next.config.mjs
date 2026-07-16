/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.json': ['.json'],
    };
    return config;
  },
  // Force fresh build
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
