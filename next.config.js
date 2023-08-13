/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'http://stage.grameenkalyan.com'],
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://api.grameenkalyan.com/api',
    NEXT_PUBLIC_IMAGE_URL: 'http://stage.grameenkalyan.com'
  },
  output: 'export'
};

module.exports = nextConfig;
