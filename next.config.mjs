/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/',
        destination: '/events',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
  }
};

export default nextConfig;
