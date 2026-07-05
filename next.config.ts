import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gvalentinus.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.ucsp.edu.pe',
      },
      {
        protocol: 'https',
        hostname: 'www.mivivienda.com.pe',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cecargi.com',
      }
    ],
  },
};

export default nextConfig;
