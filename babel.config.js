module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
			},
		],
	],
	plugins: [
		'styled-components',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-logical-assignment-operators',
		'@babel/plugin-proposal-nullish-coalescing-operator',
		'@babel/plugin-proposal-optional-chaining',
	],
	env: {
		production: {
			only: ['app'],
			plugins: [
				'lodash',
				'@babel/plugin-proposal-logical-assignment-operators',
				'@babel/plugin-proposal-nullish-coalescing-operator',
				'@babel/plugin-proposal-optional-chaining',
			],
		},
		test: {
			plugins: [
				'@babel/plugin-transform-modules-commonjs',
				'dynamic-import-node',
				'@babel/plugin-proposal-logical-assignment-operators',
				'@babel/plugin-proposal-nullish-coalescing-operator',
				'@babel/plugin-proposal-optional-chaining',
			],
		},
	},
};
