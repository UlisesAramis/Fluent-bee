import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",

  basePath: "/Fluent-bee",
  assetPrefix: "/Fluent-bee/",
};

export default nextConfig;
