// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "res.cloudinary.com",
//       "avatars.githubusercontent.com",
//       "lh3.googleusercontent.com",
//     ],
//   },
//   reactStrictMode: true,
//   transpilePackages: ["ui"],
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
};

module.exports = nextConfig;
