const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "api.mobilezmarket.com",
      "lh3.googleusercontent.com",
      "mobilezmarket.s3.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: '/us',
        destination: '/us/blogs',
        permanent: true, // Use false for a temporary redirect (302)
      }, {
        source: "/robots.txt",
        destination: "/robots",
        permanent: true, // Use false for a temporary redirect (302)
      },
    ];
  },
};

module.exports = nextConfig;
