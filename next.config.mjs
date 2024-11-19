/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    config.experiments = {...config.experiments, topLevelAwait: true};
    return config;
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dev-test.d-idei.ru",
        port: "1000",
      },
    ],
  },
};

export default nextConfig;
