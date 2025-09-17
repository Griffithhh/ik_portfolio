

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // статический билд
  basePath: "/ik_portfolio", // путь для GitHub Pages
  assetPrefix: "/ik_portfolio/", // ОБЯЗАТЕЛЬНО слэш в конце
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
