/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_TOKEN: process.env.API_TOKEN,
    },
    images: {
        domains: ['avatars.githubusercontent.com']
    }
};

export default nextConfig;
