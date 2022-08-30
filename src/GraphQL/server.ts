'use strict';
import express from 'express'; //express
import { graphqlHTTP } from 'express-graphql';
import { config } from '../../config';
import schema from './schema';

const server = express.Router();//Router de Express

server.use(
	'/',
	graphqlHTTP( (req, res) => {
		return {
			schema,
			graphiql: config.GRAPHIQL,
			context: { req, res }
		};
	}),
);



// DO NOT DO app.listen() unless we're testing this directly
if (require.main === module) {
	server.listen((process.env.PORT || 4000), () => {
		console.log(`Iniciando Express en el puerto 4000${server.graphqlPath}`); /*${app.get('port')}*/
	});
}

// Instead do export the app:
export default server;