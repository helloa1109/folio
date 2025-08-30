// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ next export 대체
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 안 됨
  },
  basePath: "/folio", // ✅ 레포 이름 (깃허브 주소에 맞춰줘야 함)
  assetPrefix: "/folio/", // ✅ CSS/JS 경로 맞추기
};

module.exports = nextConfig;
