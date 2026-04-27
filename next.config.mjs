/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["react-icons", "@heroicons/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sidago.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
