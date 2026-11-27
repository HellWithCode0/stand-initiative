import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Keep links to the old Google Sites pages working.
  async redirects() {
    return [
      { source: "/mission", destination: "/about#mission", permanent: true },
      { source: "/team", destination: "/about#team", permanent: true },
      { source: "/partners", destination: "/about#partners", permanent: true },
      { source: "/resources", destination: "/work", permanent: true },
      { source: "/programmes", destination: "/work", permanent: true },
      { source: "/programs", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
