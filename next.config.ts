import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites(){
    return[
      {
        source: '/:path*', // Match all routes
        destination: '/ui/:path*', // Map them to the `ui` folder
      },
    ]
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"flowbite.s3.amazonaws.com"
      }
    ]
  }
};

export default nextConfig;
