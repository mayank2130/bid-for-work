/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['fiverr-res.cloudinary.com'],
  },
  basePath: '/web',
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};
