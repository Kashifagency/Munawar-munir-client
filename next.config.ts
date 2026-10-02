import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
