import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "platform-lookaside.fbsbx.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

export default nextConfig;
