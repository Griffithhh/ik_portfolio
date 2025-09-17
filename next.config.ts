

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ik_portfolio",
  assetPrefix: "./", // обязательно ведущий слеш
  images: { unoptimized: true },
};

export default nextConfig;
