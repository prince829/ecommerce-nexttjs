import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/_next/:path*", // Allow Next.js internal paths
        destination: "/_next/:path*",
      },
      {
        source: "/:path*", // Match all other routes
        destination: "/ui/:path*",
      },
    ];
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"flowbite.s3.amazonaws.com",
        pathname: "/blocks/marketing-ui/content/**",
      },
      {
        protocol:"https",
        hostname:"flowbite.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol:"https",
        hostname:"flowbite.com"
      }
    ]
  }
};

export default nextConfig;
