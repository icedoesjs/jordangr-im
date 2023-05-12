/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.iceyy.dev",
        port: ""
      },
      {
        protocol: "https",
        hostname: "camo.githubusercontent.com",
        port: ""
      }
    ]
  }
}

module.exports = nextConfig
