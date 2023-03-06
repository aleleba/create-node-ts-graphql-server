import path  from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import { resolveTsAliases } from 'resolve-ts-aliases';
import { deFaultValues } from './config';

const ROOT_DIR = path.resolve(__dirname);
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('build');
const alias = resolveTsAliases(path.resolve('tsconfig.json'));

const config = {
	entry: './src/index.ts',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: BUILD_DIR,
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.json', '.gql'],
		alias,
	},
	mode: 'production',
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
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
		],
	},
};
  
export default config;