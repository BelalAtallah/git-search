/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "",
    env: {
        API_TOKEN: process.env.API_TOKEN,
    },
    images: {
      unoptimized: true,
      domains: ['avatars.githubusercontent.com']

    }
};

export default nextConfig;
