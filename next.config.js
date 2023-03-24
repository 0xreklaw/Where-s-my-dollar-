/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.visualcapitalist.com",
      "www.etftrends.com"
    ],
  }
}

module.exports = nextConfig
