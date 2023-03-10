'use strict';

import { getTestModel, addTextModel } from '@models';
import { TextMutation } from '@src/GraphQL/schema/test.schema';

// eslint-disable-next-line
export const getTest = async ({}) => {
	return getTestModel();
};

// eslint-disable-next-line
export const addText = async ({ text }: TextMutation) => {
	return addTextModel({ text });
};