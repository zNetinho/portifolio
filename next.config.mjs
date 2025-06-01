/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
        {
            source: "/(.*)",
            headers: [
            {
                key: "X-Frame-Options",
                value: "SAMEORIGIN",
            },
            {
                key: "X-Content-Type-Options",
                value: "nosniff",
            },
            {
                key: "Referrer-Policy",
                value: "strict-origin-when-cross-origin",
            },
            {
                key: "Content-Security-Policy",
                value: "default-src 'self'; script-src 'self';",
            },
            ],
        },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icons8.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            },
            {
                protocol: 'https',
                hostname: 'images.credly.com'
            }
        ],
    }
};

export default nextConfig;
