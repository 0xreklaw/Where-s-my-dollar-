/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.visualcapitalist.com",
      "www.etftrends.com",
      "fred.stlouisfed.org",
    ],
  }
}

module.exports = nextConfig
