<<<<<<< HEAD
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	images: {
=======

/** @type {import("next").NextConfig} */
const config = {
  trailingSlash: true,
	images: {
		unoptimized: true,
>>>>>>> d408552 (Initial commit: Portafolio web project)
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
				pathname: '**',
			},
		],
	},
<<<<<<< HEAD
};

export default config;
=======
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack: (config, { isServer }) => {
		config.stats = "verbose";
		return config;
	},
	output: "export"
};
export default config;
>>>>>>> d408552 (Initial commit: Portafolio web project)
