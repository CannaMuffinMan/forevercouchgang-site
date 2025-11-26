/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← THIS LINE MAKES THE "out" FOLDER
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
