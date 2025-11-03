/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
		qualities: [75, 65, 50, 25, 10],
	}
};

export default nextConfig;
