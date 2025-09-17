/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",               // статический экспорт
  basePath: "/ik_portfolio",      // basePath для GitHub Pages
  assetPrefix: "/ik_portfolio/",  // обязательный слэш в конце
  images: { unoptimized: true },  // если используешь next/image
};

export default nextConfig;

