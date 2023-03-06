'use strict';

import { getTest, addText } from '@controllerGraphQL';

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		// eslint-disable-next-line
		test: (rootValue: any, args: any, context: any) => ({}),
	},
	Mutation: {
		// eslint-disable-next-line
		testMutation: (rootValue: any, args: any, context: any) => ({}),
	},
	Test: {
		test: (rootValue: any, args: any, context: any) => getTest({rootValue, args, context})
	},
	TestMutation: {
		testMutation: (rootValue: any, args: any, context: any) => addText({rootValue, args, context})
	}
};

export default resolvers;