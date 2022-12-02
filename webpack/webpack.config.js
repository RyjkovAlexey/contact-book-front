import { ProvidePlugin, DefinePlugin } from 'webpack';

export const plugins = [
	new ProvidePlugin({
		process: 'process/browser',
	}),
	new DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development'),
	}),
];
