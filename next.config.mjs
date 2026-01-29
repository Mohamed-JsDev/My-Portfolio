/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },
  // swcMinify: true,
  // experimental: {
  //   esmExternals: true,
  // },
};

export default nextConfig;
