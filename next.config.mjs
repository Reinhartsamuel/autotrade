import corsMiddleware from './app/api/middleware';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.githubassets.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
      logging: {
        fetches: {
          fullUrl: true,
        },
      },
      middleware : [corsMiddleware]
};

export default nextConfig;
