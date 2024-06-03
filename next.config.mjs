/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },

  images: {
    remotePatterns: [
      // for test
      {
        protocol: "https",
        hostname: "https://via.placeholder.com",
        pathname: "**",
      },
    ],

    imageSizes: [24, 45, 128, 375],
    deviceSizes: [512, 768, 1280, 2560],
  },
}

export default nextConfig
