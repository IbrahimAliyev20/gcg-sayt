import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'caspian.markup.az',
      },
    ],
  },
};
export default nextConfig;