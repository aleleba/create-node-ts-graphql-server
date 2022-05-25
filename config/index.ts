import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
	env: process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'production',
	graphiQL: process.env.GRAPHIQL === 'true' ? true : false,
	whiteList: process.env.WHITELIST_URLS ? process.env.WHITELIST_URLS.split(',') : [
		'http://localhost'
	],
	port: process.env.PORT || 4000,
};