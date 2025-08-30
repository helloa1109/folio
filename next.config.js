/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix :
    process.env.NODE_ENV === 'production'
    ? 'https://helloa1109.github.io/folio'
    : ''?
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};


module.exports = nextConfig;
