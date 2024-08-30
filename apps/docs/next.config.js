/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['fiverr-res.cloudinary.com'],
  },
  basePath: '/docs',
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/:path*',
      },
    ];
  },
};
