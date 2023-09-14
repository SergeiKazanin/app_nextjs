/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.cyberia.studio",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    additionalData: `@import "/app/styles/mixins.scss";`,
  },
};

module.exports = nextConfig;
