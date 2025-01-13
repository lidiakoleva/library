// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.openlibrary.org",
        port: "",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
