/** @type {import('next').NextConfig} */
const path = require('path');

// 운영 환경(production)인지 확인
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 운영 환경일 때만 static export
  output: isProd ? 'export' : undefined,

  // GitHub Pages 경로 설정
  basePath: isProd ? '/folio' : '', 
  assetPrefix: isProd ? '/folio/' : '',

  // 정적 export 환경에서는 이미지 최적화 비활성화
  images: {
    unoptimized: true,
  },

  // Webpack 경로 별칭(@) 설정
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;
