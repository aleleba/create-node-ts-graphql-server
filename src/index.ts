'use strict';

import ws from 'ws'; // yarn add ws
import express from 'express'; //express
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { useServer } from 'graphql-ws/lib/use/ws';
import { execute, subscribe } from 'graphql';
import GraphQLserver from './GraphQL/server';// Server of GraphQL,
import expressPlayground from 'graphql-playground-middleware-express';
import schema from './GraphQL/schema';
import { config } from '../config';
import apiRouter from './routes';

const app = express(), //creating app
	whitelist = config.WHITELIST_URLS,
	corsOptions = {
		origin: function (origin, callback) {
			if (whitelist.indexOf(origin) !== -1 || !origin) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		credentials: true
	};

//Inicialization of services of express
app
	.use(cookieParser())
	.use(express.urlencoded({limit: '500mb', extended: true}))
	.use(express.json({limit: '500mb', extended: true}))
	.use(cors(corsOptions))
	.use(apiRouter)//Routes de App
	.use('/graphql', GraphQLserver);//Server of Graphql

	if(config.PLAYGROUND_GRAPHQL === true){
		app.get('/playground', expressPlayground({ 
			endpoint: '/graphql',
			subscriptionEndpoint: '/graphql',
			settings: {
				'request.credentials': 'include', //Include Credentials for playground
		  	}, 
		}));
	}

// DO NOT DO app.listen() unless we're testing this directly
if (require.main === module) {

	const server = app.listen(config.PORT, () => {
		// create and use the websocket server
		const wsServer = new ws.Server({
			server,
			path: '/graphql',
		});

		useServer({ 
			schema,
			execute,
			subscribe,
			// eslint-disable-next-line
			onConnect: (ctx) => {
				//console.log('Connect');
			},
			// eslint-disable-next-line
			onSubscribe: (ctx, msg) => {
				//console.log('Subscribe');
			},
			// eslint-disable-next-line
			onNext: (ctx, msg, args, result) => {
				//console.debug('Next');
			},
			// eslint-disable-next-line
			onError: (ctx, msg, errors) => {
				//console.error('Error');
			},
			// eslint-disable-next-line
			onComplete: (ctx, msg) => {
				//console.log('Complete');
			},
		}, wsServer);

		console.log(`Starting Express on port ${config.PORT} and iniciating server of web sockets`);

	});

}

// Instead do export the app:
export default app;