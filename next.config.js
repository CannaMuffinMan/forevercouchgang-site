/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,  // ← This ensures all paths export
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true }
};

module.exports = nextConfig;