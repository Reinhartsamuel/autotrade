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
};

export default nextConfig;
