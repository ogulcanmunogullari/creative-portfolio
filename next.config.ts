import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
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
