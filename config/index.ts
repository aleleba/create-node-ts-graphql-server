import * as dotenv from 'dotenv';

dotenv.config();

export const deFaultValues = {
	ENV: 'production',
	PLAYGROUND_GRAPHQL: 'false',
	WHITELIST_URLS: 'http://localhost',
	PORT: '4000',
};

export const config = {
	ENV: process.env.ENV,
	PLAYGROUND_GRAPHQL: process.env.PLAYGROUND_GRAPHQL === 'true' ? true : false,
	WHITELIST_URLS: process.env.WHITELIST_URLS ? process.env.WHITELIST_URLS.split(',') : deFaultValues.WHITELIST_URLS,
	PORT: process.env.PORT,
};
