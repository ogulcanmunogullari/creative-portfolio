import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // İzin verdiğimiz site
        port: "",
        pathname: "/**", // Tüm alt klasörlere izin ver
      },
    ],
  },
};

export default nextConfig;
