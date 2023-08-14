/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stage.grameenkalyan.com'
      }
    ],
    domains: ['stage.grameenkalyan.com'],
    unoptimized: true
  },
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://api.grameenkalyan.com/api',
    NEXT_PUBLIC_IMAGE_URL: 'https://admin.grameenkalyan.com'
  }
};

module.exports = nextConfig;
