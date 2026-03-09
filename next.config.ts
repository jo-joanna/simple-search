import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	reactStrictMode: true,
	images: {
		domains: ['covers.openlibrary.org'],
	},
};

export default nextConfig;
