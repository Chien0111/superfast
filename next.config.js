/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY: process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY || '',
    OPENREPLAY_PROJECT_KEY: process.env.OPENREPLAY_PROJECT_KEY || '',
    API_CLIENT_URL: process.env.API_CLIENT_URL || '',
  },
  swcMinify: true,
}

module.exports = nextConfig
