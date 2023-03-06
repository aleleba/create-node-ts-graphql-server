import path  from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import { resolveTsAliases } from 'resolve-ts-aliases';
import { deFaultValues } from './config';

const ROOT_DIR = path.resolve(__dirname);
const resolvePath = (...args: string[]) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('build');
const alias = resolveTsAliases(path.resolve('tsconfig.json'));

const config = {
	entry: './src/index.ts',
	target: 'node',
	watch: true,
	externals: [nodeExternals()],
	output: {
		path: BUILD_DIR,
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.json', '.gql'],
		alias,
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|ts|mjs|gql)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
            { 
                test: /\.(ts)$/, loader: "ts-loader", 
                exclude: /node_modules/ 
            },
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ESLintPlugin(),
		new webpack.EnvironmentPlugin({
			...deFaultValues
		}),
		new WebpackShellPluginNext({
			onBuildEnd: {
				scripts: ['nodemon build/index.js'],
				blocking: false,
				parallel: true
			}
		})
	],
};
  
export default config;