/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.visualcapitalist.com",
      "www.etftrends.com",
      "fred.stlouisfed.org",
      "https://wheresmydollar.us",
    ],
    path: "https://wheresmydollar.us/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2FWhere%27s+My+Dollar+Logo.77326ec7.png?url=%2F_next%2Fstatic%2Fmedia%2FWhere%27s%20My%20Dollar%20Logo.77326ec7.png&w=3840&q=75 ",
  },
};

module.exports = nextConfig;
