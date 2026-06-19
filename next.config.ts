import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "asiaeyestravel.com" },
    ],
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — outputFileTracingIncludes exists at runtime but is missing from the types
  experimental: {
    outputFileTracingIncludes: {
      "/api/graphql": ["./src/graphql/schema/**/*.graphql"],
    },
  },
};

export default nextConfig;
