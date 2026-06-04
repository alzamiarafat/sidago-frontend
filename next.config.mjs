/** @type {import('next').NextConfig} */

function strapiRemotePatterns() {
  const raw = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!raw) return [];
  try {
    const u = new URL(raw);
    const protocol = u.protocol.replace(":", "");
    const pattern = {
      protocol,
      hostname: u.hostname,
      pathname: "/**",
      ...(u.port ? { port: u.port } : {}),
    };
    return [pattern];
  } catch {
    return [];
  }
}

const nextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
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
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "tailwindcss.com", pathname: "/**" },
      { protocol: "https", hostname: "sidago.com", pathname: "/**" },
      { protocol: "https", hostname: "www.sidago.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "wp-corp-site.s3.eu-central-1.amazonaws.com",
        pathname: "/**",
      },
      ...strapiRemotePatterns(),
    ],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/styles/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
