/** @type {import('next').NextConfig} */

// 운영 환경인지 개발 환경인지 확인하는 변수
const isProd = process.env.NODE_ENV === 'production';
// GitHub 레포지토리 이름. 필요에 따라 변경하세요.
const repoName = 'folio';

const nextConfig = {
  // GitHub Pages와 같은 정적 호스팅을 위한 설정
  output: 'export',
  
  // 운영 환경일 때만 basePath와 assetPrefix를 적용
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  // 사용자가 설정한 trailingSlash 유지
  trailingSlash: true,
  
  // 사용자가 설정한 images 설정 유지
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
  
  // 사용자가 설정한 webpack alias 설정 유지
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // require('path')를 사용하려면 상단에 const path = require('path') 선언이 필요하지만,
      // __dirname은 Node.js에서 기본 제공되므로 바로 사용 가능합니다.
      '@': require('path').resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;