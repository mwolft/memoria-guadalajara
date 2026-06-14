import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dhm8zqtkq/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
