import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'drive.google.com',
      'lh3.googleusercontent.com',  // Google Drive a veces redirige a este dominio
    ],
  },
};

export default nextConfig;
