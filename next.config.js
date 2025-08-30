/** @type {import('next').NextConfig} */

// 운영 환경(production)인지 확인
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 운영 환경일 때만 output과 basePath를 적용
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/folio' : '', // ★★★ 여기에 슬래시를 추가했습니다 ★★★

  // 정적 export 환경에서는 이미지 최적화 비활성화
  images: {
    unoptimized: true,
  },

  // Webpack 경로 별칭(@) 설정 (기존 설정 유지)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;