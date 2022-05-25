import path  from 'path';
import * as dotenv from 'dotenv';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';

const dotEnvToParse = dotenv.config();

const ROOT_DIR = path.resolve(__dirname);
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('build');

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
		alias: {
			'@controllers': path.resolve(__dirname, 'controllers/'),
            '@models': path.resolve(__dirname, 'models/'),
            '@controllerGraphQL': path.resolve(__dirname, 'controllers/controllerGraphQL/'),
            '@GraphQL': path.resolve(__dirname, 'GraphQL/'),
            '@config': path.resolve(__dirname, 'config/'),
		}
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
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotEnvToParse.parsed),
		}),
		new WebpackShellPluginNext({
			onBuildEnd: {
				scripts: ['npm run start:nodemon'],
				blocking: false,
				parallel: true
			}
		})
	],
};
  
export default config;