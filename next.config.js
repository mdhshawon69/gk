/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  distDir: 'build',
  images: {
    domains: ['admin.grameenkalyan.com', 'res.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
