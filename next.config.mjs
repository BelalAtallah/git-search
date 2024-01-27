/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/git-search",
    env: {
        API_TOKEN: process.env.API_TOKEN,
    },
    images: {
        domains: ['avatars.githubusercontent.com']
    }
};

export default nextConfig;
