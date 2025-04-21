import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
	// Ignorar archivos y carpetas especificados en el antiguo .eslintignore
	{
		ignores: [
			'.eslintrc.js', // Aunque se eliminará, es bueno mantenerlo por si acaso
			'build/',
			'webpack.config.ts',
			'webpack.config.dev.ts',
		],
	},

	// Configuración recomendada por ESLint
	js.configs.recommended,

	// Configuraciones recomendadas por typescript-eslint
	...tseslint.configs.recommended,

	// Configuración personalizada
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			// El parser ya está configurado por tseslint.configs.recommended
		},
		// Los plugins ya están configurados por tseslint.configs.recommended
		rules: {
			// Reglas personalizadas del antiguo .eslintrc.js
			'indent': [
				'error',
				'tab'
			],
			'linebreak-style': [
				'error',
				'unix'
			],
			'quotes': [
				'error',
				'single'
			],
			'semi': [
				'error',
				'always'
			],
			// Puedes añadir o sobrescribir reglas de las configuraciones recomendadas aquí si es necesario
		},
	}
];
