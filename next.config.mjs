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
      {
        protocol: "https",
        hostname: "edu.amrita-dent.ru",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
  // async redirects() {
  //   // permanent: true ? 308 (301) : 307 (302)
  //   return [
  //     {
  //       source: "/2-sposoba-narashchivaniya-kostnoj-tkani-tekhnika-kostnykh-plastin-kyuri-i-nkr-2",
  //       destination: "/courses/category-stomatologya",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
