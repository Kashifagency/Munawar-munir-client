import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF is ~30-50% smaller than WebP; WebP stays as the fallback.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Tailwind CSS is small; inlining it removes a render-blocking request
    // and speeds up first paint for new visitors.
    inlineCss: true,
  },
  async redirects() {
    return [
      // Canonical host is www — send the bare domain there permanently.
      {
        source: "/:path*",
        has: [{ type: "host", value: "takejunkfurnituredubai.com" }],
        destination: "https://www.takejunkfurnituredubai.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
