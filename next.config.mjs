/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icons8.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            }
        ],
    }
};

export default nextConfig;
