'use strict';

import { TextMutation } from "@GraphQL/schema/test.schema";

export const getTestModel = async () => {
	return 'This is the text response for Test Query from a model';
};

export const addTextModel = async ({ text }: TextMutation) => {
	return `Simulate to insert some text: ${text} from a model`;
};