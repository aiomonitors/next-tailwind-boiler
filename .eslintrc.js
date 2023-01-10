module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'next', 'prettier'],
	overrides: [
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		"react/jsx-max-props-per-line": ['error', { "maximum": { "single": 1, "multi": 1 } }]
	},
};
