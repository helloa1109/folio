/** @type {import('next').NextConfig} */

// 1. 운영 환경(production)인지 확인
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 2. 운영 환경일 때만 output과 basePath를 적용
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/folio' : '',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;