import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "asiaeyestravel.com" },
    ],
  },
};

// Include .graphql files in the serverless bundle so loadFilesSync works on Vercel
(nextConfig as Record<string, unknown>).experimental = {
  outputFileTracingIncludes: {
    "/api/graphql": ["./src/graphql/schema/**/*.graphql"],
  },
};

export default nextConfig;
