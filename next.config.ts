import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production"; // doesnt work on git

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  basePath: "/portfolio",
};

export default nextConfig;
