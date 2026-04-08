import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "standalone",
  distDir: ".next",

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https:;
    connect-src 'self' https:;
    frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
    frame-ancestors 'self';
  `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
