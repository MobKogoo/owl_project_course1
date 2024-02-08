/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'courses-top.ru',
			'courses-top.ruhttp',
			'cdn-bucket.hb.bizmrg.com',
		],
	},
};

module.exports = nextConfig;
