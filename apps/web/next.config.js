/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['fiverr-res.cloudinary.com'],
  },
  basePath: '/web',
  async rewrites() {
    return [
      {
        source: '/web/:path*',
        destination: '/:path*',
      },
    ];
  },
};
