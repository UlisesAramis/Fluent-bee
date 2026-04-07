import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",

  basePath: "/Fluent-bee",
  assetPrefix: "/Fluent-bee/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
