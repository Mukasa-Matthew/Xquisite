/** @type {import('next').NextConfig} */
const nextConfig = {
    // Turbopack configuration
    turbo: {
        root: '.',
    },

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.samsung.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'store.storeimages.cdn-apple.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'image.oneplus.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
        ],
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Performance optimizations
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['react-icons'],
    },

    // Compression
    compress: true,

    // Bundle analyzer (optional - remove in production)
    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     config.resolve.fallback = {
    //       ...config.resolve.fallback,
    //       fs: false,
    //     };
    //   }
    //   return config;
    // },

    // Headers for performance
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
            {
                source: '/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

    // Redirects for better SEO
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
