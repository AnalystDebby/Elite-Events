/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hydeparkwinterwonderland.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "wembleypark.com",
        port: "",
      },
    ],
  },
};
