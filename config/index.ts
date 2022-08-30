import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
	ENV: process.env.ENV,
	GRAPHIQL: process.env.GRAPHIQL === 'true' ? true : false,
	PLAYGROUND_GRAPHQL: process.env.PLAYGROUND_GRAPHQL === 'true' ? true : false,
	WHITELIST_URLS: process.env.WHITELIST_URLS && process.env.WHITELIST_URLS.split(','),
	PORT: process.env.PORT,
};

export const deFaultValues = {
	ENV: 'production',
	GRAPHIQL: 'false',
	PLAYGROUND_GRAPHQL: 'false',
	WHITELIST_URLS: 'http://localhost',
	PORT: 4000,
}