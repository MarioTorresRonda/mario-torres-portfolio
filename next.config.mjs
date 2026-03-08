/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		rules: {
			'*.txt': {
				loaders: ['raw-loader'],
			}
		}
	},
};

export default nextConfig;
