/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // ✅ 중요한 부분
  basePath: isProd ? "/folio" : "",
  assetPrefix: isProd ? "/folio/" : "",
};

module.exports = nextConfig;
