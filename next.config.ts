import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // статический билд
  basePath: "/ik_portfolio", // важная строка
  assetPrefix: "/ik_portfolio", // чтобы JS и CSS грузились с правильного пути
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
