/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Canonicalize the homepage to the keyword URL (permanent 308).
      { source: "/", destination: "/managed-it-services", permanent: true },
    ];
  },
};

export default nextConfig;
