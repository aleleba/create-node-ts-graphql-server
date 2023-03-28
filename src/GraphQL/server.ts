'use strict';

import express from 'express'; //express
import { createHandler } from 'graphql-http/lib/use/express';
import schema from '@src/GraphQL/schema';


const server = express.Router();//Router de Express

server.use(
	'/',
	createHandler({
		schema,
		context(req) {
			const res = req.context.res
			return {req, res};
		},
	})
);

// DO NOT DO app.listen() unless we're testing this directly
if (require.main === module) {
	const app = express();
	app.listen((process.env.PORT || 4000), () => {
		console.log(`Iniciando Express en el puerto 4000`); /*${app.get('port')}*/
	});
}

// Instead do export the app:
export default server;