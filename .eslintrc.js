module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		'prettier',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	plugins: ['react-hooks', 'prettier'],
	env: {
		browser: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/default': 'error',
		'import/first': 'error',
		'import/no-duplicates': 'error',
		'import/newline-after-import': 'error',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'import/no-cycle': 'off',
		'no-tabs': 'off',
		'max-len': [
			'error',
			{
				tabWidth: 2,
				code: 100,
			},
		],
		semi: 'off',
		'@typescript-eslint/semi': ['error'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/ban-types': 'off',
		'implicit-arrow-linebreak': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'no-plusplus': 'off',
		radix: 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', ignoreRestSiblings: true },
		],
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': ['error'],
		'import/no-unassigned-import': [
			'error',
			{
				allow: ['**/*.css', 'core-js/**', 'regenerator-runtime/**', 'rc-calendar/assets/index.css'],
			},
		],
		'class-methods-use-this': 'off',
		'no-new-wrappers': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-return-assign': 'off',
		'no-nested-ternary': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'prefer-destructuring': 'off',
		'no-useless-constructor': 'off',
		'prettier/prettier': ['error'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 0,
			},
		},
	],
};
