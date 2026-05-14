/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/legal/privacy", destination: "/privacy", permanent: true },
      { source: "/legal/cookies", destination: "/cookies", permanent: true },
      {
        source: "/legal/modern-slavery",
        destination: "/modern-slavery",
        permanent: true,
      },
    ];
  },
  // `optimizePackageImports` for react-icons has been linked to Turbopack dev/HMR
  // instability in some Next.js versions; re-enable when upgrading if dev is stable.
  experimental: {
    optimizePackageImports: ["@heroicons/react"],
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
