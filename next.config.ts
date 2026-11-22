import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Development only: stop caching optimized images so changes show up right away.
    // Remove this block (or raise the value) before deploying.
    minimumCacheTTL: 0,
  },
};

export default nextConfig;