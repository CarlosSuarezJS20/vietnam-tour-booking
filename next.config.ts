import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "asiaeyestravel.com" },
    ],
  },
};

export default nextConfig;
