'use strict';

import { getTest, addText } from '../../controllers/controllerGraphQL';

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		// eslint-disable-next-line
		test: (rootValue, args, context) => ({}),
	},
	Mutation: {
		// eslint-disable-next-line
		testMutation: (rootValue, args, context) => ({}),
	},
	Test: {
		test: (rootValue, args, context) => getTest({rootValue, args, context})
	},
	TestMutation: {
		testMutation: (rootValue, args, context) => addText({rootValue, args, context})
	}
};

export default resolvers;