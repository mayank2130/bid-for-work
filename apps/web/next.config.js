/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['fiverr-res.cloudinary.com'],
  },
  basePath: '/web',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/web',
        permanent: true,
      },
    ];
  },
};